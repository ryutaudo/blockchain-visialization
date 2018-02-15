import React, { Component } from 'react';
import propTypes from 'prop-types';
import AllPurchases from '../containers/AllPurchases';
import AddPurchase from '../containers/AddPurchase';

class App extends Component {
  render() {
    return (
      <div className="App">
      App
      <AddPurchase />
      <AllPurchases />
      </div>
    );
  }
}

export default App;