import { connect } from 'react-redux';

import ShoppingCartUser from '../components/ShoppingCartUser';
import { getUser } from '../reducers/cart';

const mapStateToProps = state => {
  const user = getUser(state.cart);

  return {
    isLoggedIn: !!user.id,
  }
};

const ShoppingCartUserContainer = connect(mapStateToProps)(ShoppingCartUser);

export default ShoppingCartUserContainer;
