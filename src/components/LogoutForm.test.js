import Enzyme from 'enzyme';
import React from 'react';

import LogoutForm from './LogoutForm';

const createTestProps = (attributes = {}) => ({
  logout: jest.fn(),
  userName: 'Waffles',
  ...attributes,
});

describe('render', () => {
  let wrapper;
  let testProps;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<LogoutForm {...testProps} />);
  });

  it('should render the userName', () => {
    expect(wrapper.find('[data-automation="logoutForm-message"]').text()).toContain(testProps.userName);
  });

  it('should render a logout button', () => {
    expect(wrapper.find('[data-automation="logoutForm-logout-button"]')).toHaveLength(1);
  });
});

describe('clicking the logout button', () => {
  let wrapper;
  let testProps;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<LogoutForm {...testProps} />);

    wrapper.find('[data-automation="logoutForm-logout-button"]').first().props().onClick();
  });

  it('should invoke logout function', () => {
    expect(testProps.logout).toHaveBeenCalled();
  });
});
