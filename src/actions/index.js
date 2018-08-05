import * as api from '../api';

export const FETCH_PRODUCT_LIST_REQUEST = 'FETCH_PRODUCT_LIST_REQUEST';
export const FETCH_PRODUCT_LIST_SUCCESS = 'FETCH_PRODUCT_LIST_SUCCESS';
export const FETCH_PROMOTION_LIST_REQUEST = 'FETCH_PROMOTION_LIST_REQUEST';
export const FETCH_PROMOTION_LIST_SUCCESS = 'FETCH_PROMOTION_LIST_SUCCESS';
export const ADD_TO_CART = 'ADD_TO_CART';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const fetchProductListRequest = () => {
  return {
    type: FETCH_PRODUCT_LIST_REQUEST,
  };
};

export const fetchProductListSuccess = (products) => {
  return {
    type: FETCH_PRODUCT_LIST_SUCCESS,
    products: products,
  };
};

export const fetchProductList = () => {
  return (dispatch, getState) => {
    dispatch(fetchProductListRequest());

    return api.allProducts().then(products => {
      dispatch(fetchProductListSuccess(products));
    });
  };
};

export const fetchPromotionListRequest = () => {
  return {
    type: FETCH_PROMOTION_LIST_REQUEST,
  };
};

export const fetchPromotionListSuccess = (promotions) => {
  return {
    type: FETCH_PROMOTION_LIST_SUCCESS,
    promotions: promotions,
  };
};

export const fetchPromotionList = () => {
  return (dispatch, getState) => {
    dispatch(fetchPromotionListRequest());

    return api.allPromotions().then(promotions => {
      dispatch(fetchPromotionListSuccess(promotions));
    });
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product: product,
  };
};

export const loginRequest = (username, password) => {
  return {
    type: LOGIN_REQUEST,
    username,
    password,
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  };
};

export const login = (username, password) => {
  return (dispatch, getState) => {
    dispatch(loginRequest());

    return api.login(username, password).then(user => {
      dispatch(loginSuccess(user));
    }).catch(() => {
      dispatch(loginFailure());
    });
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};
