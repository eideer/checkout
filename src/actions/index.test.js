import {
  FETCH_PRODUCT_LIST_REQUEST,
  FETCH_PRODUCT_LIST_SUCCESS,
} from './index';

import {
  fetchProductListRequest,
  fetchProductListSuccess,
  fetchProductList,
} from './index';

describe('fetchProductListRequest', () => {
  let expectedAction;

  beforeEach(() => {
    expectedAction = { type: FETCH_PRODUCT_LIST_REQUEST };
  });

  it('should create an action to indicate the product list is being fetched', () => {
    expect(fetchProductListRequest()).toEqual(expectedAction);
  });
});

describe('fetchProductListSuccess', () => {
  let expectedAction;
  let products;

  beforeEach(() => {
    products = [];
    expectedAction = { type: FETCH_PRODUCT_LIST_SUCCESS, products };
  });

  it('should create an action containing the product list', () => {
    expect(fetchProductListSuccess(products)).toEqual(expectedAction);
  });
});

describe('fetchProductList', () => {
  let dispatch;
  let getState;
  let products;

  beforeEach(async () => {
    dispatch = jest.fn();
    getState = jest.fn();
    products = require('../api/products.json');

    await fetchProductList()(dispatch, getState);
  });

  it('should dispatch fetchProductListRequest', () => {
    expect.assertions(1);

    expect(dispatch.mock.calls[0][0]).toEqual(fetchProductListRequest());
  });

  it('should dispatch fetchProductListSuccess', () => {
    expect.assertions(1);

    expect(dispatch.mock.calls[1][0]).toEqual(fetchProductListSuccess(products));
  });
});
