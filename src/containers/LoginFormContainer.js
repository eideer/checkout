import { connect } from 'react-redux';

import { login } from '../actions';
import LoginForm from '../components/LoginForm';

const mapStateToProps = state => {
  const loginForm = state.ui.loginForm;

  return {
    error: loginForm.error,
    submitting: loginForm.submitting
  };
};

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginFormContainer;
