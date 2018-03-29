import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import AllPurchases from '../containers/AllPurchases';
import SinglePurchase from '../containers/SinglePurchase';
import PurchaseForm from '../containers/PurchaseForm';
import AddFormModal from '../containers/AddFormModal';

class App extends Component {
	get currentView() {
		if (this.props.currentView === 'SinglePurchase') {
			return <SinglePurchase />;
		}
		if (this.props.currentView === 'AddPurchase') {
			return <PurchaseForm />;
		}
		return <AllPurchases />;
	}

	render() {
		return (
			<div className="App">
				<Navbar color="dark" light expand="md">
					<NavbarBrand href="/" className="text-white">CCCimulate</NavbarBrand>
					<AddFormModal />
				</Navbar>
				{this.currentView}
			</div>
		);
	}
}

export default App;