import Enzyme from 'enzyme';
import React from 'react';

import ShoppingCartItem from './ShoppingCartItem';
import * as pricing from '../helpers';

const createTestProps = (attributes = {}) => ({
  name: 'Just a test',
  price: 1.99,
  quantity: 1,
  ...attributes,
});

describe('render', () => {
  let wrapper;
  let testProps;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<ShoppingCartItem {...testProps}/>);
  });

  it('should render the ShoppingCartItem name', () => {
    expect(wrapper.find('[data-automation="shoppingCartItem-name"]').text()).toContain(testProps.name);
  });

  describe('with a quantity of 1', () => {

    beforeEach(() => {
      testProps = createTestProps({ quantity: 1 });
      wrapper = Enzyme.shallow(<ShoppingCartItem {...testProps}/>);
    });

    it('should render the total as the item price', () => {
      expect(wrapper.find('[data-automation="shoppingCartItem-total"]').text()).toContain(testProps.price);
    });
  });

  describe('with a quantity greater than 1', () => {

    beforeEach(() => {
      testProps = createTestProps({ quantity: 2222 });
      wrapper = Enzyme.shallow(<ShoppingCartItem {...testProps}/>);
    });

    it('should render the price', () => {
      expect(wrapper.find('[data-automation="shoppingCartItem-price"]').text()).toContain(testProps.price);
    });

    it('should render the quantity', () => {
      expect(wrapper.find('[data-automation="shoppingCartItem-quantity"]').text()).toContain(testProps.quantity);
    });

    it('should calculate the total based on price and quantity', () => {
      const total = pricing.total(testProps.price, testProps.quantity);

      expect(wrapper.find('[data-automation="shoppingCartItem-total"]').text()).toContain(total);
    });
  });
});
