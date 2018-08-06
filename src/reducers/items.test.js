import { ADD_TO_CART } from '../actions';
import { items, initialState } from './items';

describe('items', () => {
  describe('without a known action', () => {
    let expectedState;

    beforeEach(() => {
      expectedState = { ...initialState };
    });

    it('should return the initial state', () => {
      expect(items(undefined, { type: 'JUST_A_TEST' })).toEqual(expectedState);
    });
  });

  describe('with an ADD_TO_CART action', () => {
    let expectedState;
    let testProduct;
    let testAction;

    beforeEach(() => {
      testProduct = { id: 'just_a_test' };
      testAction = { type: ADD_TO_CART, product: testProduct };
    });

    describe('and with a new product', () => {
      let currentState;

      beforeEach(() => {
        currentState = initialState;
        expectedState = {
          ...initialState, [testProduct.id]: { ...testProduct, quantity: 1 },
        };
      });

      it('should add the product to the cart', () => {
        expect(items(currentState, testAction)).toEqual(expectedState);
      });
    });

    describe('and a cart containing the a product', () => {
      let currentState;

      beforeEach(() => {
        currentState = items(initialState, testAction);
        expectedState = {
          ...initialState, [testProduct.id]: { ...testProduct, quantity: 2 }
        };
      });

      it('should increment the product quantity', () => {
        expect(items(currentState, testAction)).toEqual(expectedState);
      });
    });
  });
});
