import { FETCH_PRODUCT_LIST_SUCCESS } from '../actions/index';
import reducer from './index';

describe('reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = reducer(undefined, { type: 'JUST_A_TEST' });
  });

  it('should define a key for products', () => {
    expect(Object.keys(initialState)).toContain('products');
  });

  it('should define a key for cart', () => {
    expect(Object.keys(initialState)).toContain('cart');
  });

  it('should define a key for ui', () => {
    expect(Object.keys(initialState)).toContain('ui');
  });
});
