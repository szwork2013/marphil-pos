import Firebase from 'firebase';
const ref = new Firebase('vivid-torch-4276.firebaseio.com');

const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
const ADD_NEW_ITEM_SUCCESS = 'ADD_NEW_ITEM_SUCCESS';
const ADD_NEW_ITEM_ERROR = 'ADD_NEW_ITEM_ERROR';
const UPDATE_ITEM = 'UPDATE_ITEM';
const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
const UPDATE_ITEM_ERROR = 'UPDATE_ITEM_ERROR';
const REMOVE_ITEM = 'REMOVE_ITEM';
const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
const REMOVE_ITEM_ERROR = 'REMOVE_ITEM_ERROR';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return [
        ...state,
        {
          item_id: action.item_id,
          item_name: action.item_name,
          category: action.category,
          supplier: action.supplier,
          brand: action.brand,
          description: action.description,
        }
      ];
    case UPDATE_ITEM:
      return {
        
      };
    case REMOVE_ITEM:
      return {
        
      };
    default:
      return state;
  }
}

function addNewItem() {
  return dispatch => {
    ref.child(`inventory/${item}`).set({
      
    });
  };
}

function updateItem() {
  
}

function removeItem() {
  
}