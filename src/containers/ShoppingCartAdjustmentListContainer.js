import { connect } from 'react-redux';

import ShoppingCartAdjustmentList from '../components/ShoppingCartAdjustmentList';
import { getAdjustments } from '../reducers/cart';

const mapStateToProps = state => ({
  adjustments: getAdjustments(state.cart)
});

const ShoppingCartAdjustmentListContainer = connect(mapStateToProps)(ShoppingCartAdjustmentList);

export default ShoppingCartAdjustmentListContainer;
