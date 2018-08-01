import { allProducts } from './index';

describe('allProducts', () => {

  it('should resolve with an array of products from ./products.json', () => {
    expect.assertions(1);

    let expectedResults = require('./products.json');
    return expect(allProducts()).resolves.toEqual(expectedResults);
  });      
});
