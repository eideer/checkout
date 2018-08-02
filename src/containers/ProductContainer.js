import { connect } from 'react-redux';

import { addToCart } from '../actions';
import Product from '../components/Product';

const mapDispatchToProps = dispatch => ({
  addToCart: (product) => dispatch(addToCart(product)),
});

const ProductContainer = connect(null, mapDispatchToProps)(Product);

export default ProductContainer;
