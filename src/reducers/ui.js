import { FETCH_PRODUCT_LIST_REQUEST, FETCH_PRODUCT_LIST_SUCCESS } from '../actions';

export const initialState = {
  productList: {
    fetching: false,
  },
};

export const ui = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        productList: {
          fetching: true,
        },
      };

      case FETCH_PRODUCT_LIST_SUCCESS:
        return {
          ...state,
          productList: {
            fetching: false,
          },
        };

      default:
        return state;
  }
};
