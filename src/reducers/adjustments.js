import {
  ADD_TO_CART,
  FETCH_PROMOTION_LIST_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions';

import * as cart from './cart';
import * as pricing from '../helpers';

export const calculateAdjustment = (item, promotion) => {
  switch(promotion.type) {

    case 'price-drop': {
      const eligibleQuantity = 1;
      const reductionPerItem = pricing.toPrice(pricing.toCents(item.price) - pricing.toCents(promotion.price));
      const adjustmentAmount = -pricing.total(reductionPerItem, item.quantity);

      return {
        id: item.id,
        item: item.name,
        description: promotion.description,
        amount: adjustmentAmount,
        quantity: eligibleQuantity
      };
    }

    case 'multi-buy': {
      const eligibleQuantity = Math.floor(item.quantity / promotion.quantity);
      const adjustmentAmount = -pricing.total(item.price, eligibleQuantity * promotion.freebies);

      return {
        id: item.id,
        item: item.name,
        description: promotion.description,
        amount: adjustmentAmount,
        quantity: eligibleQuantity
      };
    }

    default:
      return;
  }
};

export const getAdjustments = state => Object.values(state);

export const initialState = {};

export const adjustments = (state = initialState, action, cartState) => {

  switch(action.type) {
    case ADD_TO_CART:
    case LOGIN_SUCCESS:
    case FETCH_PROMOTION_LIST_SUCCESS:
      const user = cart.getUser(cartState);
      const items = cart.getItems(cartState);

      return items.reduce((newState, item) => {
        const promotion = cart.getPromotion(cartState, user.id, item.id);

        if (promotion && item.quantity >= promotion.quantity) {
          const adjustment = calculateAdjustment(item, promotion);

          if (adjustment) {
            return { ...newState, [adjustment.id]: adjustment };
          }
        }

        return newState;
      }, state);

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
