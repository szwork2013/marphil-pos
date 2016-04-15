import Firebase from 'firebase';

export const INITIAL_DATA = 'INITIAL_DATA';

export function getInitialItems() {
  const initialData = init => (
    {
      type: INITIAL_DATA,
      init
    }
  );

  const fetchInitialItems = () => {
    const ref = new Firebase('https://vivid-torch-4276.firebaseio.com/items');
    return ref.once('value');
  };

  return dispatch => (
    fetchInitialItems().then(data => {
      const initObj = data.val();
      const init = Object.keys(initObj).map(key => {
        initObj[key].id = key;
        return initObj[key];
      });

      return dispatch(initialData(init));
    }).catch(err => console.log(err))
  );
}
