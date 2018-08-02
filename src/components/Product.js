import PropTypes from 'prop-types';
import React from 'react';

const Product = ({ addToCart, id, name, price }) => (
  <div>
    <h4 data-automation='product-name'>{name}</h4>
    <div data-automation='product-price'>&#36;{price}</div>
    <div>
      <button data-automation='product-add-to-cart-button' type='button' onClick={() => addToCart({ id, name, price })}>
        Add to cart
      </button>
    </div>
  </div>
);

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
