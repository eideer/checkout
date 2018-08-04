import {
  FETCH_PRODUCT_LIST_REQUEST,
  FETCH_PRODUCT_LIST_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';

import { initialState, ui } from './ui';

describe('ui', () => {

  describe('without a known action', () => {
    let expectedState;
    let testAction;

    beforeEach(() => {
      testAction = { type: 'JUST_A_TEST' };
      expectedState = { ...initialState };
    });

    it('should return the initial state', () => {
      expect(ui(initialState, testAction)).toEqual(expectedState);
    });
  });

  describe('with a FETCH_PRODUCT_LIST_REQUEST action', () => {
    let expectedState;
    let testAction;

    beforeEach(() => {
      testAction = { type: 'FETCH_PRODUCT_LIST_REQUEST'};
      expectedState = {
        ...initialState,
        productList: {
          fetching: true,
        },
      };
    });

    it('should handle FETCH_PRODUCT_LIST_REQUEST', () => {
      expect(ui(initialState, testAction)).toEqual(expectedState);
    });
  });

  describe('with a FETCH_PRODUCT_LIST_SUCCESS action', () => {
    let expectedState;
    let testProducts;
    let testAction;

    beforeEach(() => {
      testProducts = [];
      testAction = { type: FETCH_PRODUCT_LIST_SUCCESS, products: testProducts };
      expectedState = {
        ...initialState,
        productList: {
          fetching: false,
        },
      };
    });

    it('should handle FETCH_PRODUCT_LIST_SUCCESS', () => {
      expect(ui(initialState, testAction)).toEqual(expectedState);
    });
  });

  describe('with a LOGIN_REQUEST action', () => {
    let expectedState;
    let testAction;

    beforeEach(() => {
      expectedState = {
        ...initialState,
        loginForm: {
          ...initialState.loginForm,
          error: false,
          submitting: true
        }
      };
      testAction = { type: LOGIN_REQUEST };
    });

    it('should set loginForm submitting to true, error to false', () => {
      expect(ui(initialState, testAction)).toEqual(expectedState);
    });
  });

  describe('with a LOGIN_SUCCESS action', () => {
    let expectedState;
    let testAction;

    beforeEach(() => {
      expectedState = {
        ...initialState,
        loginForm: {
          ...initialState.loginForm,
          error: false,
          submitting: false
        }
      };
      testAction = { type: LOGIN_SUCCESS };
    });

    it('should set loginForm submitting to false, error to false', () => {
      expect(ui(initialState, testAction)).toEqual(expectedState);
    });
  });

  describe('with a LOGIN_FAILURE action', () => {
    let expectedState;
    let testAction;

    beforeEach(() => {
      expectedState = {
        ...initialState,
        loginForm: {
          ...initialState.loginForm,
          error: true,
          submitting: false
        }
      };
      testAction = { type: LOGIN_FAILURE };
    });

    it('should set loginForm submitting to false, error to true', () => {
      expect(ui(initialState, testAction)).toEqual(expectedState);
    });
  });
});
