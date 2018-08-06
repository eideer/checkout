import { FETCH_PROMOTION_LIST_SUCCESS } from '../actions';

import { promotions, initialState } from './promotions';

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
});
