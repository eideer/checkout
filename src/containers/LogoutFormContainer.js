import { connect } from 'react-redux';

import { logout } from '../actions';
import LogoutForm from '../components/LogoutForm';

const mapStateToProps = state => ({
  userName: state.cart.user.id,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const LogoutFormContainer = connect(mapStateToProps, mapDispatchToProps)(LogoutForm);

export default LogoutFormContainer;
