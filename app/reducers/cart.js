import { ADD_CART_ITEM, REMOVE_CART_ITEM, UPDATE_CART_ITEM } from '../actions/cart';

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return [
        ...state,
        {
          item: action.item,
          id: action.id  
        }
      ];
    default:
      return state;
  }
}