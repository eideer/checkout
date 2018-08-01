import Enzyme from 'enzyme';
import React from 'react';

import ProductList from './ProductList';

const createTestProps = (attributes = {}) => ({
  fetchProductList: jest.fn(),
  fetching: false,
  products: [],
  ...attributes,
});

describe('render', () => {
  let wrapper;
  let testProps;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<ProductList {...testProps} />);
  });

  it('should render a ProductList title', () => {
    expect(wrapper.find('[data-automation="productList-title"]')).toHaveLength(1);
  });

  describe('when prop fetching is true', () => {

    beforeEach(() => {
      testProps = createTestProps({ fetching: true });
      wrapper = Enzyme.shallow(<ProductList {...testProps} />);
    });

    it('should render a ProductList fetching message', () => {
      expect(wrapper.find('[data-automation="productList-fetching"]')).toHaveLength(1);
    });
  });

  describe('when prop products contains product objects', () => {
    let testProducts;

    beforeEach(() => {
      testProducts = require('../api/products.json');
      testProps = createTestProps({ products: testProducts });
      wrapper = wrapper = Enzyme.shallow(<ProductList {...testProps} />);
    });

    it('should render a ProductList product for each product', () => {
      expect(wrapper.find('[data-automation="productList-product"]')).toHaveLength(testProducts.length);
    });
  });
});

describe('componentDidMount', () => {
  let wrapper;
  let testProps;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<ProductList { ...testProps } />, { disableLifecycleMethods: true });

    wrapper.instance().componentDidMount();
  });

  it('should invoke prop fetchProductList', () => {
    expect(testProps.fetchProductList).toHaveBeenCalled();
  });
});
