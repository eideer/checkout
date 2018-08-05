import Enzyme from 'enzyme';
import React from 'react';

import ShoppingCart from './ShoppingCart';

const createTestProps = (attributes = {}) => ({
  fetchPromotionList: jest.fn(),
  fetching: false,
  items: [],
  total: 0.00,
  ...attributes,
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

  it('should render a ShoppingCartUserContainer', () => {
    expect(wrapper.find('[data-automation="shoppingCart-shoppingCartUserContainer"]')).toHaveLength(1);
  });

  describe('when prop fetching is true', () => {

    beforeEach(() => {
      testProps = createTestProps({ fetching: true });
      wrapper = Enzyme.shallow(<ShoppingCart {...testProps} />);
    });

    it('should render a Shopping cart loading message', () => {
      expect(wrapper.find('[data-automation="shoppingCart-fetching"]')).toHaveLength(1);
    });
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

  describe('with items', () => {
    let testItems;

    beforeEach(() => {
      testItems = [{id: 'just_a_test', name: 'Just a Test', price: 1.99, quantity: 1 }];
      testProps = createTestProps({ items: testItems });
      wrapper = Enzyme.shallow(<ShoppingCart {...testProps} />);
    })

    it('should render a ShoppingCartItem per item', () => {
      expect(wrapper.find('[data-automation="shoppingCart-shoppingCartItem"]')).toHaveLength(testItems.length);
    });
  });
});

describe('componentDidMount', () => {
  let wrapper;
  let testProps;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<ShoppingCart { ...testProps } />, { disableLifecycleMethods: true });

    wrapper.instance().componentDidMount();
  });

  it('should invoke prop fetchPromotionList', () => {
    expect(testProps.fetchPromotionList).toHaveBeenCalled();
  });
});
