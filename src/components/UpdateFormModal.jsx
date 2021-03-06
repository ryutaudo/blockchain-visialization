import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText,
	Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class UpdateFormModal extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		const target = event.target;
		const value = target.value;
		const name = target.name;
		if(name === 'year') this.props.selectYear(value);
		else if(name === 'month') this.props.selectMonth(value);
		else if(name === 'base') this.props.selectBase(value);
		else this.props.selectCurrency(value);
	}
  
	handleSubmit(event) {
		event.preventDefault();
		if(!this.props.selectedYear
		|| !this.props.selectedMonth
		|| !this.props.selectedBase
		|| !this.props.selectedCurrency) {
			confirmAlert({
				title: 'You have item missing!!',
				message: 'Make sure you fill in each item.',
				buttons: [
					{
						label: 'OK',
					},
				]
			});
			return;
		}
		return this.props.updatePurchase(
			this.props.selectedYear,
			this.props.selectedMonth,
			this.props.selectedBase,
			this.props.selectedCurrency
		);
	}

	toggle() {
		this.props.toggleAddForm();
	}

	render() {
		return (
			<div>
				<Button color="secondary" onClick={this.toggle}>Update</Button>
				<Modal isOpen={this.props.modalAddForm} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Update Your CC</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for="year">Year</Label>
								<Input type="select" name="year" id="select-year" onChange={this.handleChange} defaultValue="">
									<option value="" disabled>Select a year</option>
									<option value="2013">2013</option>
									<option value="2014">2014</option>
									<option value="2015">2015</option>
									<option value="2016">2016</option>
									<option value="2017">2017</option>
									<option value="2018">2018</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label for="montj">Month</Label> 
								<Input type="select" name="month" id="select-month" onChange={this.handleChange} defaultValue="">
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
								</Input>
							</FormGroup>
							<FormGroup>
								<Label for="base">Base</Label>
								<Input type="select" name="base" id="select-base" onChange={this.handleChange} defaultValue="">
									<option value="" disabled>Select a base</option>
									<option value="BTC">BTC</option>
									<option value="ETH">ETH</option>
									<option value="LTC">LTC</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label for="currency">Currency</Label>
								<Input type="select" name="currency" id="select-currency" onChange={this.handleChange} defaultValue="">
									<option value="" disabled>Select a currency</option>
									<option value="USD">USD</option>
									<option value="JPY">JPY</option>
								</Input>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={(event) => {
							this.handleSubmit(event);
							this.toggle();
						}}>Update</Button>{' '}
						<Button color="danger" onClick={() => {
							this.props.deletePurchase(this.props.selectedPurchase.id);
							this.toggle();
						}}>Delete</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default UpdateFormModal;
