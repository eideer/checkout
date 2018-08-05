import { connect } from 'react-redux';

import { fetchPromotionList } from '../actions';
import ShoppingCart from '../components/ShoppingCart';
import * as pricing from '../helpers';

const mapStateToProps = state => {
  const items = Object.values(state.cart.items);
  const totals = items.map(item => pricing.total(item.price, item.quantity));

  return {
    fetching: state.ui.shoppingCart.fetching,
    items: items,
    total: pricing.sum(...totals),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPromotionList: () => dispatch(fetchPromotionList()),
});

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

export default ShoppingCartContainer;
