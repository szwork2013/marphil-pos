export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return [
        ...state,
        {
          item: action.item
        }
      ];
    default:
      return state;
  }
}

export function addCartItem(item) {
  return {
    type: ADD_CART_ITEM,
    item
  };
}

export function removeCartItem(item, id) {
  return {
    type: REMOVE_CART_ITEM,
    id,
    item
  };
}
