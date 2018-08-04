import PropTypes from 'prop-types';
import React from 'react';

class LoginForm extends React.Component {

  state = {
    username: '',
    password: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    const { login } = this.props;

    login(username, password);
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {
    const { username, password } = this.state;
    const { error, submitting } = this.props;

    return (
      <div>
        <form data-automation="loginForm-form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            data-automation="loginForm-input-username"
            name="username" placeholder="username"
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            data-automation="loginForm-input-password"
            name="password"
            type="password"
            value={password}
            onChange={this.handlePasswordChange}
          />

          <input
            data-automation="loginForm-submit-button"
            type="submit"
            value={submitting ? 'Submitting' : 'Login'}
            disabled={submitting}
          />

          { error &&
            <span data-automation="loginForm-error-message">Login failed</span>
          }
        </form>

        <div>
          <span>Test with username Apple, Nike or Unilever, and any value for password.</span>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  error: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default LoginForm;
