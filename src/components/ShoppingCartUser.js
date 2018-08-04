import PropTypes from 'prop-types';
import React from 'react';

import LoginFormContainer from '../containers/LoginFormContainer';
import LogoutFormContainer from '../containers/LogoutFormContainer';

const ShoppingCartUser = ({ isLoggedIn }) => (
  <div>
    <h4 data-automation="shoppingCartUser-title">Your Account</h4>
    { isLoggedIn ? (
      <LogoutFormContainer data-automation='shoppingCartUser-logoutFormContainer'/>
    ) : (
      <LoginFormContainer data-automation='shoppingCartUser-loginFormContainer'/>
    )}
  </div>
);

ShoppingCartUser.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default ShoppingCartUser;
