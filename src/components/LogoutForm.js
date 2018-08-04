import PropTypes from 'prop-types';
import React from 'react';

const LogoutForm = ({ logout, userName }) => (
  <div>
    <span data-automation='logoutForm-message'>Hello, {userName}! </span>
    <button type='button' data-automation='logoutForm-logout-button' onClick={() => logout()}>
      Logout
    </button>
  </div>
);

LogoutForm.propTypes = {
  logout: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
};

export default LogoutForm;
