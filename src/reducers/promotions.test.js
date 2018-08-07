import { FETCH_PROMOTION_LIST_SUCCESS } from '../actions';

import { getPromotion, promotions, initialState } from './promotions';

describe('promotions', () => {
  describe('without a known action', () => {
    let expectedState;

    beforeEach(() => {
      expectedState = initialState;
    });

    it('should return the initial state', () => {
      expect(promotions(undefined, { type: 'JUST_A_TEST' })).toEqual(expectedState);
    });
  });

  describe('with a FETCH_PROMOTION_LIST_SUCCESS action', () => {
    let expectedState;
    let testPromotions;
    let testAction;

    beforeEach(() => {
      testPromotions = [{ type: 'just_a_test' }];
      testAction = { type: FETCH_PROMOTION_LIST_SUCCESS, promotions: testPromotions };
      expectedState = testAction.promotions;
    });

    it('should store the received promotion list', () => {
      expect(promotions(initialState, testAction)).toEqual(expectedState);
    });
  });

  describe('getPromotion', () => {
    let currentState;
    let testPromotion;
    let userId;
    let productId;

    beforeEach(() => {
      userId = 'user_a';
      productId = 'product_b';
      testPromotion = { id: 'just_a_test ', userId, productId };
      currentState = [testPromotion];
    });

    describe('with a valid userId matching a promotion', () => {
      describe('and with a productId matching a promotion', () => {
        it('should find the promotion', () => {
          expect(getPromotion(currentState, userId, productId)).toEqual(testPromotion)
        });
      });
    });
  });
});
