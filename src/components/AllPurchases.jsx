import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import SampleChart from './LineChart';

import '../assets/css/AllPurchases.css';

class AllPurchases extends Component {

	componentDidMount() {
		this.props.getPrice();
	}

	get currentPrice() {
		if(!this.props.prices.length === 0) return 'Loading...';
		return (
			<div className="price-container">
				{this.props.prices.map(price => {
					return (
						<Card className="price card" key={price.id}>
							<CardBody>
								<CardTitle>{price.data.base}</CardTitle>
								<CardSubtitle>{price.data.amount} {price.data.currency}</CardSubtitle>
								<SampleChart base={price.data.base}/>
								<Button onClick={() => this.props.selectPurchase(price)} >Update</Button>
							</CardBody>
						</Card>
					);
				})}
			</div>
		);
	}
  
	render() {
		return (
			<div className="AllPurchases">
				<div className="price">
					{this.currentPrice}
				</div>
			</div>
		);
	}
}

export default AllPurchases;