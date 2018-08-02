import { ADD_TO_CART } from '../actions';
import { cart, initialState } from './cart';

describe('cart', () => {
  describe('without a known action', () => {
    let expectedState;

    beforeEach(() => {
      expectedState = { ...initialState };
    });

    it('should return the initial state', () => {
      expect(cart(undefined, { type: 'JUST_A_TEST' })).toEqual(expectedState);
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

    describe('and an empty cart', () => {

      beforeEach(() => {
        expectedState = {
          items: {
            [testProduct.id]: {
              ...testProduct,
              quantity: 1,
            },
          },
        };
      });

      it('should add the product to the cart', () => {
        expect(cart(initialState, testAction)).toEqual(expectedState);
      });
    });

    describe('and a cart containing the a product', () => {

      beforeEach(() => {
        expectedState = {
          items: {
            [testProduct.id]: {
              ...testProduct,
              quantity: 2,
            },
          },
        };
      });

      it('should increment the product quantity', () => {
        const state = cart(initialState, testAction);

        expect(cart(state, testAction)).toEqual(expectedState);
      });
    });
  });
});
