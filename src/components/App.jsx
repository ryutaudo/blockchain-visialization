import React, { Component } from 'react';
import propTypes from 'prop-types';
import AllPurchases from '../containers/AllPurchases';
import Form from '../containers/Form';
import SinglePurchase from '../containers/SinglePurchase';

class App extends Component {
  get currentView() {
    if (this.props.currentView === 'SinglePurchase') {
      return <SinglePurchase />
    }
    return <AllPurchases />
  }

  render() {
    return (
      <div className="App">
      App
      <Form />
      {this.currentView}
      </div>
    );
  }
}

export default App;