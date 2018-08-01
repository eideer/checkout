import { FETCH_PRODUCT_LIST_SUCCESS } from '../actions';

export const initialState = {};

export const products = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCT_LIST_SUCCESS:
      const productList = action.products.reduce((productList, product) => {
        productList[product.id] = product;
        return productList;
      }, {});

      return {
        ...state,
        ...productList,
      };

    default:
      return state;
  }
};
