import PropTypes from 'prop-types';
import React from 'react';

import Product from './Product';

class ProductList extends React.Component {

  componentDidMount() {
    const { fetchProductList } = this.props;

    fetchProductList();
  }

  render() {
    const { fetching, products } = this.props;

    return (
      <div>
        <h3 data-automation='productList-title'>Products</h3>
        <div>
          { fetching ? (
            <div data-automation='productList-fetching'>Loading products ..</div>
          ) : (
            products.map(product => <Product key={product.id} name={product.name} price={product.price} data-automation="productList-product"/>)
          )}
        </div>
      </div>
    );
  }

}

ProductList.propTypes = {
  fetchProductList: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
