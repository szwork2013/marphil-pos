import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import items from './items';
import categories from './categories';
import cart from './cart';
import login from './login.js';

const rootReducer = combineReducers({
  login,
  items,
  categories,
  cart,
  routing
});

export default rootReducer;
