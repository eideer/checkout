import { connect } from 'react-redux';

import ShoppingCart from '../components/ShoppingCart';

const mapStateToProps = state => ({
  items: [],
  total: 0.00,
});

const ShoppingCartContainer = connect(mapStateToProps)(ShoppingCart);

export default ShoppingCartContainer;
