import React, { Component } from 'react';
import propTypes from 'prop-types';
import addPurchase from '../utils'

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name
    if(name === 'year') this.props.selectYear(value);
    else if(name === 'month') this.props.selectMonth(value);
    else if(name === 'base') this.props.selectBase(value);
    else this.props.selectCurrency(value);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    if(this.props.currentView === 'AllPurchases') {
      this.props.addPurchase(
        this.props.selectedYear,
        this.props.selectedMonth,
        this.props.selectedBase,
        this.props.selectedCurrency,
      );
    }
    this.props.updatePurchase(
      this.props.selectedYear,
      this.props.selectedMonth,
      this.props.selectedBase,
      this.props.selectedCurrency,
      this.props.selectedPurchase.id,
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Year:
          <select name="year" onChange={this.handleChange} defaultValue="">
            <option value="" disabled>Select a year</option>
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
          <select name="month" onChange={this.handleChange} defaultValue="">
            <option value="" disabled>Select a month</option>
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </label>
        <br />
        <label>
          Base:
          <select name="base" onChange={this.handleChange} defaultValue="">
            <option value="" disabled>Select a base</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="LTC">LTC</option>
          </select>
        </label>
        <label>
          Currency:
          <select name="currency" onChange={this.handleChange} defaultValue="">
            <option value="" disabled>Select a currency</option>
            <option value="USD">USD</option>
            <option value="JPY">JPY</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
