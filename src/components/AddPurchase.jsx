import React, { Component } from 'react';
import propTypes from 'prop-types';

class AddPurchase extends Component {
  render() {
    return (
      <form >
        <label>
          Year:
          <select>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
          </select>
        </label>
        <label>
          Month:
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </label>
        <br />
        <label>
          Base:
          <select>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="LTC">LTC</option>
          </select>
        </label>
        <label>
          Currency:
          <select>
            <option value="USD">BTC</option>
            <option value="JPY">ETH</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddPurchase;
