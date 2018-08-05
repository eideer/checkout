import PropTypes from 'prop-types';
import React from 'react';

import ShoppingCartItem from './ShoppingCartItem';
import ShoppingCartUserContainer from '../containers/ShoppingCartUserContainer';

class ShoppingCart extends React.Component {

  componentDidMount() {
    const { fetchPromotionList } = this.props;

    fetchPromotionList();
  }

  render() {
    const { fetching, items, total } = this.props;

    return (
      <div>
        <h3 data-automation='shoppingCart-title'>Your Cart</h3>

        { fetching
          ? <div data-automation='shoppingCart-fetching'>Loading cart ..</div>
          : ( items.length === 0
              ? <div data-automation='shoppingCart-empty-message'>Please add some products to cart.</div>
              : items.map(item => <ShoppingCartItem key={item.id} {...item} data-automation="shoppingCart-shoppingCartItem"/>)
            )
          }
        <br/>
        <div data-automation='shoppingCart-total'>
          <span data-automation='shoppingCart-total-label'>Total: </span>
          <span data-automation='shoppingCart-total-amount'>&#36;{total.toFixed(2)}</span>
        </div>
        <br/>
        <ShoppingCartUserContainer data-automation='shoppingCart-shoppingCartUserContainer' />
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  fetchPromotionList: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
};

export default ShoppingCart;
