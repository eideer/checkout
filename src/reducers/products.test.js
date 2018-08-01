import { FETCH_PRODUCT_LIST_SUCCESS } from '../actions';
import { initialState, products } from './products';

describe('products', () => {

  describe('without a known action', () => {
    let expectedState;

    beforeEach(() => {
      expectedState = { ...initialState };
    });

    it('should return the initial state', () => {
      expect(products(initialState, { type: 'JUST_A_TEST' })).toEqual(expectedState);
    });
  });

  describe('with a FETCH_PRODUCT_LIST_SUCCESS action', () => {
    let expectedState;
    let testProducts;
    let testAction;

    beforeEach(() => {
      testProducts = [{ id: 'just_a_test' }];
      testAction = { type: FETCH_PRODUCT_LIST_SUCCESS, products: testProducts };

      expectedState = {
        [testProducts[0].id]: testProducts[0],
      };
    });

    it('should handle FETCH_PRODUCT_LIST_SUCCESS', () => {
      expect(products(initialState, testAction)).toEqual(expectedState);
    });
  });
});
