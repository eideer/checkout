import {
  FETCH_PRODUCT_LIST_REQUEST,
  FETCH_PRODUCT_LIST_SUCCESS,
  FETCH_PROMOTION_LIST_REQUEST,
  FETCH_PROMOTION_LIST_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';

export const initialState = {
  shoppingCart: {
    fetching: false,
  },
  productList: {
    fetching: false,
  },
  loginForm: {
    submitting: false,
    error: false,
  },
};

export const ui = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PROMOTION_LIST_REQUEST:
      return {
        ...state,
        shoppingCart: {
          fetching: true,
        },
      };

    case FETCH_PROMOTION_LIST_SUCCESS:
      return {
        ...state,
        shoppingCart: {
          fetching: false,
        },
      };

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

      case LOGIN_REQUEST:
        return {
          ...state,
          loginForm: {
            submitting: true,
            error: false
          }
        }

      case LOGIN_SUCCESS:
        return {
          ...state,
          loginForm: {
            submitting: false,
            error: false
          }
        };

      case LOGIN_FAILURE:
        return {
          ...state,
          loginForm: {
            submitting: false,
            error: true
          }
        }
      default:
        return state;
  }
};
