import { ADD_TO_CART } from '../actions';

export const getItems = (state) => Object.values(state);

export const initialState = {};

export const items = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const item = state[action.product.id]
        ? { ...state[action.product.id], quantity: + state[action.product.id].quantity + 1 }
        : { ...action.product, quantity: 1 };

      return {
        ...state,
        [item.id]: item
      };

    default:
      return state;
  }
};
