import React, { Component } from 'react';
import propTypes from 'prop-types';

class AllPurchases extends Component {

  componentDidMount() {
    this.props.getPrice();
  }

  get currentPrice() {
    if(!this.props.prices.length === 0) return 'Loading...';
    console.log(this.props.prices);
    return (
      <div className="price-container">
        {this.props.prices.map(price => {
          return (
            <div className="price" key={price.id}>
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
      <div className="AllPurchases">
        AllPurchases
        <div className="price">
          {this.currentPrice}
        </div>
      </div>
    );
  }
}

export default AllPurchases;