import Enzyme from 'enzyme';
import React from 'react';

import ShoppingCartItemList from './ShoppingCartItemList';

const createTestProps = (attributes = {}) => ({
  items: [],
  ...attributes,
});

describe('render', () => {
  let wrapper;
  let testProps;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<ShoppingCartItemList {...testProps} />);
  });

  it('should render a title', () => {
    expect(wrapper.find('[data-automation="shoppingCartItemList-title"]')).toHaveLength(1);
  });

  describe('with items', () => {
    let testItem;

    beforeEach(() => {
      testItem = { id: 'just_a_test', name: 'Test Item', price: 1.99, quantity: 3 };
      testProps = createTestProps({ items: [ testItem ]});
      wrapper = Enzyme.shallow(<ShoppingCartItemList {...testProps} />);
    });

    it('should render a ShoppingCartItem for each item', () => {
      expect(wrapper.find('[data-automation="shoppingCartItemList-shoppingCartItem"]')).toHaveLength(testProps.items.length);
    });
  });
});
