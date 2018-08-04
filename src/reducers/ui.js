import {
  FETCH_PRODUCT_LIST_REQUEST,
  FETCH_PRODUCT_LIST_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';

export const initialState = {
  productList: {
    fetching: false,
  },
  loginForm: {
    submitting: false,
    error: false,
  }
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
