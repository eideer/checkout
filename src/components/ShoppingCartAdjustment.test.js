import Enzyme from 'enzyme';
import React from 'react';

import ShoppingCartAdjustment from './ShoppingCartAdjustment';

const createTestProps = (attributes = {}) => ({
  amount: 1.99,
  description: '3 for 2 deal',
  item: 'Classic Ad',
  quantity: 1,
  ...attributes,
});

describe('render', () => {
  let wrapper;
  let testProps;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<ShoppingCartAdjustment {...testProps} />);
  });

  it('should render the item', () =>{
    expect(wrapper.find('[data-automation="shoppingCartAdjustment-item"]').text()).toContain(testProps.item);
  });

  it('should render the description', () =>{
    expect(wrapper.find('[data-automation="shoppingCartAdjustment-description"]').text()).toContain(testProps.description);
  });

  it('should render the amount', () =>{
    expect(wrapper.find('[data-automation="shoppingCartAdjustment-amount"]').text()).toContain(testProps.amount.toFixed(2));
  });

  describe('when quantity is greater than 1', () => {

    beforeEach(() => {
      testProps = createTestProps({ quantity: 2 });
      wrapper = Enzyme.shallow(<ShoppingCartAdjustment {...testProps} />);
    });

    it('should render the quantity', () =>{
      expect(wrapper.find('[data-automation="shoppingCartAdjustment-quantity"]').text()).toContain(testProps.quantity);
    });
  });
});
