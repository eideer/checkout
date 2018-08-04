import {
  ADD_TO_CART,
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions';

export const initialState = {
  items: {},
  user: {},
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

    case LOGIN_SUCCESS:
      return { ...state, user: { ...action.user }};

    case LOGOUT:
      return { ...state, user: {} };

    default:
      return state;
  }
};
