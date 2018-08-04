import {
  FETCH_PRODUCT_LIST_REQUEST,
  FETCH_PRODUCT_LIST_SUCCESS,
  ADD_TO_CART,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './index';

import {
  fetchProductListRequest,
  fetchProductListSuccess,
  fetchProductList,
  addToCart,
  loginRequest,
  loginSuccess,
  loginFailure,
  login,
  logout,
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

describe('addToCart', () => {
  let expectedAction;
  let testProduct;

  beforeEach(() => {
    testProduct = {};
    expectedAction = { type: ADD_TO_CART, product: testProduct };
  });

  it('should create an action containing the product', () => {
    expect(addToCart(testProduct)).toEqual(expectedAction);
  });
});

describe('loginRequest', () => {
  let expectedAction;

  beforeEach(() => {
    expectedAction = { type: LOGIN_REQUEST };
  });

  it('should create an action indicating a login request', () => {
    expect(loginRequest()).toEqual(expectedAction);
  });
});

describe('loginSuccess', () => {
  let expectedAction;
  let user;

  beforeEach(() => {
    user = { id: 'just_a_test' };
    expectedAction = { type: LOGIN_SUCCESS, user };
  });

  it('should create an action with the logged in user', () => {
    expect(loginSuccess(user)).toEqual(expectedAction);
  });
});

describe('loginFailure', () => {
  let expectedAction;

  beforeEach(() => {
    expectedAction = { type: LOGIN_FAILURE };
  });

  it('should create an action to indicated login failed', () => {
    expect(loginFailure()).toEqual(expectedAction);
  })
})

describe('login', () => {
  let dispatch;
  let getState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  describe('with valid credentials', () => {
    let users;
    let user;

    beforeEach(async () => {
      users = require('../api/users.json');
      user = users[0];

      await login(user.id, '')(dispatch, getState);
    });

    it('should dispatch loginRequest', () => {
      expect.assertions(1);

      expect(dispatch.mock.calls[0][0]).toEqual(loginRequest());
    });

    it('should dispatch loginSuccess', () => {
      expect.assertions(1);

      expect(dispatch.mock.calls[1][0]).toEqual(loginSuccess(user));
    });
  });

  describe('with invalid credentials', () => {

    beforeEach(async () => {
      await login('', '')(dispatch, getState);
    });

    it('should dispatch loginRequest', () => {
      expect.assertions(1);

      expect(dispatch.mock.calls[0][0]).toEqual(loginRequest());
    });

    it('should dispatch loginFailure', () => {
      expect.assertions(1);

      expect(dispatch.mock.calls[1][0]).toEqual(loginFailure());
    });
  });
});

describe('logout', () => {
  let expectedAction;

  beforeEach(() => {
    expectedAction = { type: LOGOUT };
  });

  it('should create an action to indicate logout', () => {
    expect(logout()).toEqual(expectedAction);
  });
});
