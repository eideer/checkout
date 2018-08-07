import { connect } from 'react-redux';

import { logout } from '../actions';
import LogoutForm from '../components/LogoutForm';
import { getUser } from '../reducers/cart';

const mapStateToProps = state => {
  const user = getUser(state.cart);

  return {
    userName: user.id
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const LogoutFormContainer = connect(mapStateToProps, mapDispatchToProps)(LogoutForm);

export default LogoutFormContainer;
