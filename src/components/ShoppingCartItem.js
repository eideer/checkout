import PropTypes from 'prop-types';
import React from 'react';

import * as pricing from '../helpers';

const ShoppingCartItem = ({ name, price, quantity }) => (
  <div>
    <div data-automation='shoppingCartItem-name'>{name}</div>
    { quantity > 1 && (
      <div>
        <span data-automation='shoppingCartItem-quantity'>{quantity} @ </span>
        <span data-automation='shoppingCartItem-price'>&#36;{price.toFixed(2)}</span>
      </div>
    )}
    <div data-automation='shoppingCartItem-total'>&#36;{pricing.total(price, quantity).toFixed(2)}</div>
    <br/>
  </div>
);

ShoppingCartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ShoppingCartItem;
