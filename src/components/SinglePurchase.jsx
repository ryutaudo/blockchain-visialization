import React, { Component } from 'react';
import propTypes from 'prop-types';
import Form from '../containers/Form'

class SinglePurchase extends Component {
  render() {
    return (
      <div className="SinglePurchase">
        <div className="price" key={this.props.selectedPurchase.id}>
          <p>{this.props.selectedPurchase.data.base}</p>
          <p>{this.props.selectedPurchase.data.amount} {this.props.selectedPurchase.data.currency}</p>
        </div>
        <Form />
      </div>
    );
  }
}

export default SinglePurchase;