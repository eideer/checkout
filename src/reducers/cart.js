import { combineReducers } from 'redux';
import * as itemReducer from './items';
import * as promotionReducer from './promotions';
import * as userReducer from './user';

import { items } from './items';
import { promotions } from './promotions';
import { user } from './user';

export const cart = combineReducers({
  items: items,
  promotions: promotions,
  user: user,
});
