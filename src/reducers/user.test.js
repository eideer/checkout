import { LOGIN_SUCCESS, LOGOUT } from '../actions';
import { getUser, user, initialState } from './user';

describe('user', () => {
  describe('without a known action', () => {
    let expectedState;

    beforeEach(() => {
      expectedState = { ...initialState };
    });

    it('should return the initial state', () => {
      expect(user(undefined, { type: 'JUST_A_TEST' })).toEqual(expectedState);
    });
  });

  describe('with a LOGIN_SUCCESS action', () => {
    let expectedState;
    let testAction;
    let testUser;

    beforeEach(() => {
      testUser = { id: 'just_a_test' };
      testAction = { type: LOGIN_SUCCESS, user: testUser };
      expectedState = { ...testUser };
    });

    it('should save the user properties', () => {
      expect(user(undefined, testAction)).toEqual(expectedState);
    });
  });

  describe('with a LOGOUT action', () => {
    let expectedState;
    let testAction;
    let testState;

    beforeEach(() => {
      testState = { id: 'just_a_test' };
      testAction = { type: LOGOUT };
      expectedState = { ...initialState };
    });

    it('should remove the user properties', () => {
      expect(user(testState, testAction)).toEqual(expectedState);
    });
  });
});

describe('getUser', () => {
  let currentState;
  let testUser;

  beforeEach(() => {
    testUser = { id: 'just_a_test' };
    currentState = testUser;
  });

  it('should return the user state', () => {
    expect(getUser(currentState)).toEqual(testUser);
  });
});
