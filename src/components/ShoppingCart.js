import PropTypes from 'prop-types';
import React from 'react';

import ShoppingCartItemListContainer from '../containers/ShoppingCartItemListContainer';
import ShoppingCartAdjustmentListContainer from '../containers/ShoppingCartAdjustmentListContainer';
import ShoppingCartUserContainer from '../containers/ShoppingCartUserContainer';

class ShoppingCart extends React.Component {

  componentDidMount() {
    const { fetchPromotionList } = this.props;

    fetchPromotionList();
  }

  render() {
    const { fetching, total } = this.props;

    return (
      <div>
        <h3 data-automation='shoppingCart-title'>Your Cart</h3>

        { fetching
          ? <div data-automation='shoppingCart-fetching'>Loading cart ..</div>
          : ( <div>
                <ShoppingCartItemListContainer data-automation="shoppingCart-shoppingCartItemListContainer"/>
                <ShoppingCartAdjustmentListContainer data-automation="shoppingCart-shoppingCartAdjustmentListContainer"/>
              </div>
            )
        }
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
  total: PropTypes.number.isRequired,
};

export default ShoppingCart;
