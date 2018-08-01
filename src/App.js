import React from 'react';

import ProductListContainer from './containers/ProductListContainer';
import ShoppingCartContainer from './containers/ShoppingCartContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2 data-automation='app-title'>Ads Checkout Prototype</h2>
        <hr/>
        <ProductListContainer data-automation='app-productListContainer'/>
        <hr/>
        <ShoppingCartContainer data-automation='app-shoppingCartContainer'/>
      </div>
    );
  }
}

export default App;
