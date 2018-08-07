import PropTypes from 'prop-types';
import React from 'react';

import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCartItemList = ({ items }) => (
  <div>
    <h4 data-automation='shoppingCartItemList-title'>Purchases</h4>

    { items.length === 0 &&
      <div data-automation='shoppingCartItemList-empty-message'>Please add some products to cart.</div>
    }

    { items.map(item => {
        return <ShoppingCartItem
                 key={item.id}
                 {...item}
                 data-automation="shoppingCartItemList-shoppingCartItem"
               />
      })
    }
  </div>
);

ShoppingCartItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ShoppingCartItemList;
