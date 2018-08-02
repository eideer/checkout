import { connect } from 'react-redux';

import ShoppingCart from '../components/ShoppingCart';
import * as pricing from '../helpers';

const mapStateToProps = state => {
  const items = Object.values(state.cart.items);
  const totals = items.map(item => pricing.total(item.price, item.quantity));

  return {
    items: items,
    total: pricing.sum(...totals),
  };
};

const ShoppingCartContainer = connect(mapStateToProps)(ShoppingCart);

export default ShoppingCartContainer;
