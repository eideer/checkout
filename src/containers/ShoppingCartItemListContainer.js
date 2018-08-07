import { connect } from 'react-redux';

import ShoppingCartItemList from '../components/ShoppingCartItemList';
import { getItems } from '../reducers/cart';

const mapStateToProps = state => ({
  items: getItems(state.cart)
});

const ShoppingCartItemListContainer = connect(mapStateToProps)(ShoppingCartItemList);

export default ShoppingCartItemListContainer;
