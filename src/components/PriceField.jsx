import React, { Component } from 'react';
import propTypes from 'prop-types';

class PriceField extends Component {

  componentDidMount() {
    this.props.getPrice();
  }

  get currentPrice() {
    if(!this.props.prices.length === 0) return 'Loading...';
    return (
      <div className="price-container">
        {this.props.prices.map(price => {
          console.log(price)
          return (
            <div className="price">
              <p>{price.data.base}</p>
              <p>{price.data.amount} {price.data.currency}</p>
            </div>
          );
        })}
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