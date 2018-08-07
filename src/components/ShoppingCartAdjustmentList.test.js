import Enzyme from 'enzyme';
import React from 'react';

import ShoppingCartAdjustmentList from './ShoppingCartAdjustmentList';

const createTestProps = (attributes = {}) => ({
  adjustments: [],
  ...attributes,
});

describe('render', () => {
  let wrapper;
  let testProps;

  describe('without adjustments', () => {

    beforeEach(() => {
      testProps = createTestProps({ adjustments: [] });
      wrapper = Enzyme.shallow(<ShoppingCartAdjustmentList {...testProps} />);
    });

    it('should render nothing', () => {
      expect(wrapper.debug()).toEqual("");
    });
  });

  describe('with adjustments', () => {
    let testAdjustment;
    beforeEach(() => {
      testAdjustment = { id: 'just_a_test', item: 'Test Item', description: 'Test Promotion', amount: -1.99, quantity: 1 };
      testProps = createTestProps({ adjustments: [ testAdjustment ]});
      wrapper = Enzyme.shallow(<ShoppingCartAdjustmentList {...testProps} />);
    });

    it('should render a title', () =>{
      expect(wrapper.find('[data-automation="shoppingCartAdjustmentList-title"]')).toHaveLength(1);
    });

    it('should render a ShoppingCartAdjustment per adjustments', () => {
      expect(wrapper.find('[data-automation="shoppingCartAdjustmentList-shoppingCartAdjustment"]')).toHaveLength(testProps.adjustments.length);
    });
  });
});
