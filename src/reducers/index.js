import { combineReducers } from 'redux';

import { ui } from './ui';
import { products } from './products';

export default combineReducers({
  products: products,
  ui: ui,
});
