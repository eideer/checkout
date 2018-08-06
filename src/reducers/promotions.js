import { FETCH_PROMOTION_LIST_SUCCESS } from '../actions';

export const initialState = [];

export const promotions = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PROMOTION_LIST_SUCCESS:
      return [ ...action.promotions ];

    default:
      return state;
  }
};
