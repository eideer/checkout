import PropTypes from 'prop-types';
import React from 'react';

const ShoppingCart = ({ items, total }) => (
  <div>
    <h3 data-automation='shoppingCart-title'>Your Cart</h3>
    { items.length === 0 && (
      <div data-automation='shoppingCart-empty-message'>Please add some products to cart.</div>
    )}
    <br/>
    <div data-automation='shoppingCart-total'>
      <span data-automation='shoppingCart-total-label'>Total: </span>
      <span data-automation='shoppingCart-total-amount'>&#36;{total.toFixed(2)}</span>
    </div>
  </div>
);

ShoppingCart.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
};

export default ShoppingCart;
