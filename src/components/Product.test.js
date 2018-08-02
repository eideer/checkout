import Enzyme from 'enzyme';
import React from 'react';

import Product from './Product';

const createTestProps = (attributes = {}) => ({
  addToCart: jest.fn(),
  id: 'waffles',
  name: 'Waffles',
  price: 1.99,
  ...attributes,
});

describe('render', () => {
  let wrapper;
  let testProps;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<Product {...testProps} />);
  });

  it('should render the Product name', () => {
    expect(wrapper.find('[data-automation="product-name"]').text()).toContain(testProps.name);
  });

  it('should render the Product price', () => {
    expect(wrapper.find('[data-automation="product-price"]').text()).toContain(testProps.price);
  });

  it('should render an Add to Cart button', () => {
    expect(wrapper.find('[data-automation="product-add-to-cart-button"]')).toHaveLength(1);
  });
});

describe('clicking the add to cart button', () => {
  let wrapper;
  let testProps;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<Product {...testProps} />);

    wrapper.find('[data-automation="product-add-to-cart-button"]').first().props().onClick();
  });

  it('should invoke addToCart with the product id, name and price', () => {
    expect(testProps.addToCart).toHaveBeenCalledWith({ id: testProps.id, name: testProps.name, price: testProps.price});
  });
});
