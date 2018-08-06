import { combineReducers } from 'redux';

import { items } from './items';
import { promotions } from './promotions';
import { user } from './user';

export const cart = combineReducers({
  items: items,
  promotions: promotions,
  user: user,
});
