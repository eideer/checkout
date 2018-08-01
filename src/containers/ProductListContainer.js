import { connect } from 'react-redux';

import { fetchProductList } from '../actions';
import ProductList from '../components/ProductList';

const mapStateToProps = state => ({
  fetching: state.ui.productList.fetching,
  products: Object.values(state.products),
});

const mapDispatchToProps = dispatch => ({
  fetchProductList: () => dispatch(fetchProductList()),
});

const ProductListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductListContainer;
