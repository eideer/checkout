import { allProducts } from '../api';

export const FETCH_PRODUCT_LIST_REQUEST = 'FETCH_PRODUCT_LIST_REQUEST';
export const FETCH_PRODUCT_LIST_SUCCESS = 'FETCH_PRODUCT_LIST_SUCCESS';
export const ADD_TO_CART = 'ADD_TO_CART';

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

    return allProducts().then(products => {
      dispatch(fetchProductListSuccess(products));
    });
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product: product,
  };
};
