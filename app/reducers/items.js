import { INITIAL_DATA } from '../actions/item';

export default function items(state = [], action) {
  switch (action.type) {
    case INITIAL_DATA:
      return action.init;
    default:
      return state;
  }
}