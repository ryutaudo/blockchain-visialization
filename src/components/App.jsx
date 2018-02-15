import React, { Component } from 'react';
import propTypes from 'prop-types';
import PriceField from '../containers/PriceField';
import AddPurchase from './AddPurchase';

class App extends Component {
  render() {
    return (
      <div className="App">
      App
      <AddPurchase />
      <PriceField />
      </div>
    );
  }
}

export default App;