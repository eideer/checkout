import Enzyme from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

describe('render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<App/>);
  });

  it('should render an App title', () => {
    expect(wrapper.find('[data-automation="app-title"]')).toHaveLength(1);
  });

  it('should render an App productListContainer', () => {
    expect(wrapper.find('[data-automation="app-productListContainer"]')).toHaveLength(1);
  });

  it('should render an App shoppingCartContainer', () => {
    expect(wrapper.find('[data-automation="app-shoppingCartContainer"]')).toHaveLength(1);
  });
});
