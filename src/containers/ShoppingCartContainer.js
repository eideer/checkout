import { connect } from 'react-redux';

import { fetchPromotionList } from '../actions';
import ShoppingCart from '../components/ShoppingCart';
import * as pricing from '../helpers';
import { getItems, getAdjustments } from '../reducers/cart';

const mapStateToProps = state => {
  const items = getItems(state.cart);
  const itemsTotal = pricing.sum(...items.map(item => pricing.total(item.price, item.quantity)));

  const adjustments = getAdjustments(state.cart);
  const adjustmentsTotal = pricing.sum(...adjustments.map(adjustment => adjustment.amount));

  return {
    fetching: state.ui.shoppingCart.fetching,
    adjustments: adjustments,
    items: items,
    total: pricing.sum(itemsTotal, adjustmentsTotal),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPromotionList: () => dispatch(fetchPromotionList()),
});

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

export default ShoppingCartContainer;
