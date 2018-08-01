import { FETCH_PRODUCT_LIST_REQUEST, FETCH_PRODUCT_LIST_SUCCESS } from '../actions';
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
        productList: {
          fetching: false,
        },
      };
    });

    it('should handle FETCH_PRODUCT_LIST_SUCCESS', () => {
      expect(ui(initialState, testAction)).toEqual(expectedState);
    });
  });
});
