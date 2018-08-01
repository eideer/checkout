import { combineReducers } from 'redux';

import { ui } from './ui';
import { cart } from './cart';
import { products } from './products';

export default combineReducers({
  products: products,
  cart: cart,
  ui: ui,
});
