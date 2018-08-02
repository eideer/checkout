import { ADD_TO_CART } from '../actions';

export const initialState = {
  items: {},
};

export const cart = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const cartItem = state.items[action.product.id] || { ...action.product, quantity: 0 };
      const quantity = cartItem.quantity + 1;

      return {
        ...state,
        items: {
          ...state.items,
          [cartItem.id]: {
            ...cartItem,
            quantity,
          },
        },
      };

    default:
      return state;
  }
};
