import * as api from './index';

describe('allProducts', () => {

  it('should resolve with an array of products from ./products.json', () => {
    expect.assertions(1);

    let expectedResults = require('./products.json');
    return expect(api.allProducts()).resolves.toEqual(expectedResults);
  });
});

describe('allPromotions', () => {
  it('should resolve with an array of promotions from ./promotions.json', () => {
    expect.assertions(1);

    let expectedResults = require('./promotions.json');
    return expect(api.allPromotions()).resolves.toEqual(expectedResults);
  });
});

describe('login', () => {
  let users;

  beforeEach(() => {
    users = require('./users.json');
  });

  describe('with a valid username', () => {
    let username;
    let password;
    let user;

    beforeEach(() => {
      user = users[0];
      username = user.id;
      password = '';
    });

    it('should resolve with the matching user', () => {
      return expect(api.login(username, password)).resolves.toEqual(user);
    });
  });

  describe('with an invalid username', () => {
    let username;
    let password;

    beforeEach(() => {
      username = '';
      password = '';
    });

    it('should reject', () => {
      return expect(api.login(username, password)).rejects.toEqual();
    });
  });
});
