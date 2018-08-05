import {
  ADD_TO_CART,
  FETCH_PROMOTION_LIST_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions';

export const initialState = {
  items: {},
  promotions: [],
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

    case FETCH_PROMOTION_LIST_SUCCESS:
      return { ...state, promotions: [ ...action.promotions ]};

    case LOGIN_SUCCESS:
      return { ...state, user: { ...action.user }};

    case LOGOUT:
      return { ...state, user: {} };

    default:
      return state;
  }
};
