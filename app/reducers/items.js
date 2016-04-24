import { FETCH_ALL_ITEMS, ADD_ITEM } from '../actions/item';

export default function items(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_ITEMS:
      return action.items;
    case ADD_ITEM:
    default:
      return state;
  }
}
