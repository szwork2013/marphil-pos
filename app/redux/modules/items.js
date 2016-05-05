import Firebase from 'firebase';
const ref = new Firebase('vivid-torch-4276.firebaseio.com');

const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS';
const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
const NEW_ITEM = 'NEW_ITEM';

export default function items(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_ITEMS:
      return Object.keys(action.items).map(key => action.items[key]);
    case NEW_ITEM:
      return [
        ...state,
        action.newItem
      ];
    default:
      return state;
  }
}

export function listenToFirebase() {
  return dispatch => {
    function fetchAllItems() {
      return ref.child('items')
        .once('value')
        .then(snap => dispatch({ type: FETCH_ALL_ITEMS, items: snap.val() }));
    }

    function addListeners() {
      const now = new Date().getTime();
      const query = ref.child('items').orderByChild('timestamp').startAt(now);
      query.on('child_added', newItem => (dispatch({ type: NEW_ITEM, newItem })));
    }

    return fetchAllItems()
      .then(addListeners)
      .catch(err => console.log(err));
  };
}

export function addItem(itemObj) {
  return dispatch => {
    ref.child(`items/${itemObj.name}`).set(itemObj)
      .then(item => dispatch({ type: ADD_NEW_ITEM, item }))
      .catch(err => console.log(err));
  };
}
