import {
  ADD_TO_CART,
  FETCH_PROMOTION_LIST_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions';

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
          ...initialState,
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
          ...initialState,
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

  describe('with a FETCH_PROMOTION_LIST_SUCCESS action', () => {
    let expectedState;
    let testPromotions;
    let testAction;

    beforeEach(() => {
      testPromotions = [{ type: 'just_a_test' }];
      testAction = { type: FETCH_PROMOTION_LIST_SUCCESS, promotions: testPromotions };
      expectedState = {
        ...initialState,
        promotions: testPromotions,
      };
    });

    it('should handle FETCH_PROMOTION_LIST_SUCCESS', () => {
      expect(cart(initialState, testAction)).toEqual(expectedState);
    });
  });

  describe('with a LOGIN_SUCCESS action', () => {
    let expectedState;
    let testAction;
    let user;

    beforeEach(() => {
      user = { id: 'just_a_test' };
      testAction = { type: LOGIN_SUCCESS, user };
      expectedState = { ...initialState, user };
    });

    it('should save the user in the cart', () => {
      expect(cart(undefined, testAction)).toEqual(expectedState);
    });
  });

  describe('with a LOGOUT action', () => {
    let expectedState;
    let testAction;
    let testState;

    beforeEach(() => {
      testState = { ...initialState, user: { id: 'just_a_test' }};
      testAction = { type: LOGOUT };
      expectedState = { ...initialState, user: {}};
    });

    it('should remove the user from the cart', () => {
      expect(cart(testState, testAction)).toEqual(expectedState);
    });
  });
});
