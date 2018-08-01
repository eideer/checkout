import PropTypes from 'prop-types';
import React from 'react';

const Product = ({ name, price }) => (
  <div>
    <h4 data-automation='product-name'>{name}</h4>
    <div data-automation='product-price'>&#36;{price}</div>
  </div>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
