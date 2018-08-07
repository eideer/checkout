import Enzyme from 'enzyme';
import React from 'react';

import { LOGOUT } from '../actions';
import { getAdjustments, calculateAdjustment, adjustments, initialState } from './adjustments';

describe('adjustments', () => {
  describe('without a known action', () => {
    let expectedState;

    beforeEach(() => {
      expectedState = { ...initialState };
    });

    it('should return the initial state', () => {
      expect(adjustments(undefined, { type: 'JUST_A_TEST' }, undefined)).toEqual(expectedState);
    });
  });

  describe('with a LOGOUT action', () => {
    let currentState;
    let testAction;

    beforeEach(() => {
      testAction = { type: LOGOUT };
      currentState = { 'just_a_test': { id: 'just_a_test ' } };
    });

    it('should return the initialState', () => {
      expect(adjustments(currentState, testAction, undefined)).toEqual(initialState);
    });
  });

  describe('with a LOGIN_SUCCESS action', () => {
    // TODO
  });

  describe('with a ADD_TO_CART action', () => {
    // TODO
  });

  describe('with a FETCH_PROMOTION_LIST_SUCCESS action', () => {
    // TODO
  });
});

const createTestItem = (attributes = {}) => ({
  id: 'just_a_test',
  quantity: 1,
  price: 10.00,
  ...attributes
});

describe('calculateAdjustment', () => {
  let item;
  let promotion;

  describe('with an unknown promotion.type', () => {

    beforeEach(() => {
      item = createTestItem();
      promotion = { type: 'totally_free' };
    });

    it('should return nothing', () => {
      expect(calculateAdjustment(item, promotion)).toEqual(undefined);
    });
  });

  describe('with a multi-buy promotion type', () => {
    // TODO
  });

  describe('with a price-drop promotion type', () => {
    // TODO
  });
});

describe('getAdjustments', () => {
  let currentState;
  let testAdjustment;

  beforeEach(() => {
    testAdjustment = { id: 'just_a_test ' };
    currentState = { [testAdjustment.id]: testAdjustment };
  });

  it('should return adjustment state as an array', () => {
    expect(getAdjustments(currentState)).toEqual([testAdjustment]);
  });
});
