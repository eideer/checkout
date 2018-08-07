import * as adjustmentReducer from './adjustments';
import * as itemReducer from './items';
import * as promotionReducer from './promotions';
import * as userReducer from './user';

export const getAdjustments = (state) => adjustmentReducer.getAdjustments(state.adjustments);
export const getItems = (state) => itemReducer.getItems(state.items);
export const getPromotion = (state, userId, itemId) => promotionReducer.getPromotion(state.promotions, userId, itemId);
export const getUser = (state) => userReducer.getUser(state.user);

export const initialState = {
  adjustments: adjustmentReducer.initialState,
  items:       itemReducer.initialState,
  promotions:  promotionReducer.initialState,
  user:        userReducer.initialState
};

export const cart = (state = initialState, action) => {
  const cartState = {
    items:      itemReducer.items(state.items, action),
    promotions: promotionReducer.promotions(state.promotions, action),
    user:       userReducer.user(state.user, action)
  };

  return {
    ...cartState,
    adjustments: adjustmentReducer.adjustments(state.adjustments, action, cartState)
  };
};
