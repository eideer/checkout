import PropTypes from 'prop-types';
import React from 'react';

import ShoppingCartAdjustment from './ShoppingCartAdjustment';

const ShoppingCartAdjustmentList = ({ adjustments }) => {
  if (adjustments.length === 0) {
    return null;
  }

  return (
    <div>
      <h4 data-automation='shoppingCartAdjustmentList-title'>Adjustments</h4>
      { adjustments.map(adjustment => {
          return <ShoppingCartAdjustment
                   key={adjustment.id}
                   {...adjustment}
                   data-automation="shoppingCartAdjustmentList-shoppingCartAdjustment"
                   />
        })
      }
      <br/>
    </div>
  );
};

ShoppingCartAdjustmentList.propTypes = {
  adjustments: PropTypes.array.isRequired,
};

export default ShoppingCartAdjustmentList;
