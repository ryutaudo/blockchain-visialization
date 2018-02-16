import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Button } from 'reactstrap';
import PurchaseForm from '../containers/PurchaseForm'

class SinglePurchase extends Component {
  render() {
    return (
      <div className="SinglePurchase">
        <div className="price" key={this.props.selectedPurchase.id}>
          <p>{this.props.selectedPurchase.data.base}</p>
          <p>{this.props.selectedPurchase.data.amount} {this.props.selectedPurchase.data.currency}</p>
        </div>
        <PurchaseForm />
        <Button
          onClick={() => {
            this.props.deletePurchase(this.props.selectedPurchase.id)
          }}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default SinglePurchase;