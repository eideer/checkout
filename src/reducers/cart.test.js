import { cart, initialState } from './cart';

describe('cart', () => {
  let initialState;

  beforeEach(() => {
    initialState = cart(undefined, { type: 'JUST_A_TEST' });
  });

  it('should define a key for items', () => {
    expect(Object.keys(initialState)).toContain('items');
  });

  it('should define a key for promotions', () => {
    expect(Object.keys(initialState)).toContain('promotions');
  });

  it('should define a key for user', () => {
    expect(Object.keys(initialState)).toContain('user');
  });
});
