import { connect } from 'react-redux';

import ShoppingCartUser from '../components/ShoppingCartUser';

const mapStateToProps = state => ({
  isLoggedIn: !!state.cart.user.id,
});

const ShoppingCartUserContainer = connect(mapStateToProps)(ShoppingCartUser);

export default ShoppingCartUserContainer;
