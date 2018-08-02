import * as pricing from './index';

describe('pricing.toCents', () => {
  it('should return the value * 100', () => {
    const price = 0.10;
    const cents = 10;

    expect(pricing.toCents(price)).toEqual(cents);
  });
});

describe('pricing.toPrice', () => {
  it('should return the value / 100', () => {
    const cents = 10;
    const price = 0.10;

    expect(pricing.toPrice(cents)).toEqual(price);
  });
});

describe('pricing.total', () => {
  it('should multiply the price by the quantity', () => {
    const price = 0.10;
    const quantity = 3;

    expect(pricing.total(price, quantity)).toEqual(0.30);
  });
});

describe('sum', () => {
  it('should sum all the received values', () => {
    expect(pricing.sum(0.1, 0.2)).toEqual(0.3);
  });
});
