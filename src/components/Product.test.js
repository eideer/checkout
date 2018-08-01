import Enzyme from 'enzyme';
import React from 'react';

import Product from './Product';

const createTestProps = (attributes = {}) => ({
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
});
