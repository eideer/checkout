import Enzyme from 'enzyme';
import React from 'react';

import ShoppingCart from './ShoppingCart';

const createTestProps = (attributes = {}) => ({
  items: [],
  total: 0.00,
});

describe('render', () => {
  let wrapper;
  let testProps;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<ShoppingCart {...testProps}/>);
  });

  it('should render a ShoppingCart title', () => {
    expect(wrapper.find('[data-automation="shoppingCart-title"]')).toHaveLength(1);
  });

  it('should render a ShoppingCart total label', () => {
    expect(wrapper.find('[data-automation="shoppingCart-total-label"]')).toHaveLength(1);
  });

  it('should format and render a ShoppingCart total amount', () => {
    expect(wrapper.find('[data-automation="shoppingCart-total-amount"]').text()).toContain(testProps.total.toFixed(2));
  });

  describe('without any items', () => {

    beforeEach(() => {
      testProps = createTestProps({ items: [] });
      wrapper = Enzyme.shallow(<ShoppingCart {...testProps} />);
    });

    it('should render a ShoppingCart empty message', () => {
      expect(wrapper.find('[data-automation="shoppingCart-empty-message"]')).toHaveLength(1);
    });
  });
});
