import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import items from './items';
import cart from './cart';
import navigation from './navigation';

const rootReducer = combineReducers({
  items,
  cart,
  navigation,
  routing
});

export default rootReducer;
