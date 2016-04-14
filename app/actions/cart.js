export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

export function addCartItem(item, id) {
  return {
    type: ADD_CART_ITEM,
    item: item,
    id
  };
}