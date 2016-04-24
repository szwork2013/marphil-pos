import Firebase from 'firebase';

export const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS';
export const NEW_ITEM = 'NEW_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
const ref = new Firebase('vivid-torch-4276.firebaseio.com');

export function listenToFirebase() {
  return dispatch => {
    function fetchAllItemsOnce() {
      return ref.child('items')
        .once('value')
        .then(snap => {
          const itemsObj = snap.val();
          const items = Object.keys(itemsObj).map(key => {
            itemsObj[key].id = key;
            return itemsObj[key];
          });
          return items;
        });
    }

    function addListeners() {
      const now = new Date().getTime();
      const query = ref.child('items').orderByChild('timestamp').startAt(now);
      query.on('child_added', receivedItem => (dispatch({ type: NEW_ITEM, receivedItem })));
    }

    return fetchAllItemsOnce()
      .then(items => dispatch({ type: FETCH_ALL_ITEMS, items }))
      .then(addListeners)
      .catch(err => console.log(err));
  };
}

export function addItem(itemObj) {
  return dispatch => (
    ref.child(`items/${itemObj.name}`).set(itemObj)
      .then(item => dispatch({ type: ADD_ITEM_SUCCESS, item }))
      .catch(err => console.log(err))
  );
}
