import React, { Component } from 'react';
import propTypes from 'prop-types';

class PriceField extends Component {

  componentDidMount() {
    this.props.getPrice();
  }

  get currentPrice() {
    if(!this.props.price) return 'Loading...';
    return (
      <div className="current-price">
        <p>{this.props.price.base}</p>
        <p>{this.props.price.amount} {this.props.price.currency}</p>
      </div>
    );
  }
  
  render() {
    return (
      <div className="PriceField">
        PriceField
        <div className="price">
          {this.currentPrice}
        </div>
      </div>
    );
  }
}

export default PriceField;