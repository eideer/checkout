import Enzyme from 'enzyme';
import React from 'react';

import ShoppingCartUser from './ShoppingCartUser';

const createTestProps = (attributes = {}) => ({
  isLoggedIn: false,
  ...attributes,
});

describe('render', () => {
  let wrapper;
  let testProps;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<ShoppingCartUser {...testProps}/>);
  });

  it('should render a ShoppingCartUser title', () => {
    expect(wrapper.find('[data-automation="shoppingCartUser-title"]')).toHaveLength(1);
  });

  describe('with prop isLoggedIn true', () => {

    beforeEach(() => {
      testProps = createTestProps({ isLoggedIn: true });
      wrapper = Enzyme.shallow(<ShoppingCartUser {...testProps}/>);
    });

    it('should render a ShoppingCartUser LogoutFormContainer', () => {
      expect(wrapper.find('[data-automation="shoppingCartUser-logoutFormContainer"]')).toHaveLength(1);
    });
  });

  describe('with prop isLoggedIn false', () => {
    beforeEach(() => {
      testProps = createTestProps({ isLoggedIn: false });
      wrapper = Enzyme.shallow(<ShoppingCartUser {...testProps}/>);
    });

    it('should render a ShoppingCartUser LogoutFormContainer', () => {
      expect(wrapper.find('[data-automation="shoppingCartUser-loginFormContainer"]')).toHaveLength(1);
    });
  });
});
