import PropTypes from 'prop-types';
import React from 'react';

const ShoppingCartAdjustment = ({ amount, description, item, quantity }) => (
  <div>
    <div data-automation="shoppingCartAdjustment-item">{item}</div>
    <div>
      { quantity > 1 &&
        <span data-automation="shoppingCartAdjustment-quantity">{quantity} @ </span>
      }
      <span data-automation="shoppingCartAdjustment-description">{description} </span>
    </div>
    <div data-automation="shoppingCartAdjustment-amount">&#36;{amount}</div>
    <br/>
  </div>
);

ShoppingCartAdjustment.propTypes = {
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default ShoppingCartAdjustment;
