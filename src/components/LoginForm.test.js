import Enzyme from 'enzyme';
import React from 'react';

import LoginForm from './LoginForm';

const createTestProps = (attributes = {}) => ({
  error: false,
  login: jest.fn(),
  submitting: false,
  ...attributes,
});

describe('render', () => {
  let wrapper;
  let testProps;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<LoginForm {...testProps} />);
  });

  it('should render a username input', () => {
    expect(wrapper.find('[data-automation="loginForm-input-username"]')).toHaveLength(1);
  });

  it('should render a password input', () => {
    expect(wrapper.find('[data-automation="loginForm-input-password"]')).toHaveLength(1);
  });

  it('should render a submit button', () => {
    expect(wrapper.find('[data-automation="loginForm-submit-button"]')).toHaveLength(1);
  });

  describe('with prop submitting true', () => {

    beforeEach(() => {
      testProps = createTestProps({ submitting: true });
      wrapper = Enzyme.shallow(<LoginForm {...testProps} />);
    });

    it('should disable the submit button', () => {
      const disabledState = wrapper.find('[data-automation="loginForm-submit-button"]').first().props().disabled;
      expect(disabledState).toEqual(true);
    });
  });

  describe('with error prop true', () => {

    beforeEach(() => {
      testProps = createTestProps({ error: true });
      wrapper = Enzyme.shallow(<LoginForm {...testProps} />);
    });

    it('should render a loginForm error-message', () => {
      expect(wrapper.find('[data-automation="loginForm-error-message"]')).toHaveLength(1);
    });
  });
});

describe('submitting the login form', () => {
  let wrapper;
  let testProps;
  let changeUsernameEvent;
  let changePasswordEvent;
  let submitFormEvent;

  beforeEach(() => {
    testProps = createTestProps();
    wrapper = Enzyme.shallow(<LoginForm {...testProps} />);

    changeUsernameEvent = { target: { value: 'waffles' }};
    changePasswordEvent = { target: { value: 'password'}};
    submitFormEvent = { preventDefault: jest.fn() };

    wrapper.find('[data-automation="loginForm-input-username"]').first().props().onChange(changeUsernameEvent);
    wrapper.find('[data-automation="loginForm-input-password"]').first().props().onChange(changePasswordEvent);

    wrapper.find('[data-automation="loginForm-form"]').first().props().onSubmit(submitFormEvent);
  });

  it('should invoke login function', () => {
    expect(testProps.login).toHaveBeenCalledWith(changeUsernameEvent.target.value, changePasswordEvent.target.value);
  });
});
