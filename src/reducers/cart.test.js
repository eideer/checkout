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
});
