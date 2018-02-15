import { connect } from 'react-redux';
import AllPurchases from '../components/AllPurchases';
import { getPrice, selectPurchase } from '../actions/index';

const mapStateToProps = state => ({
  prices: state.prices,
});

const mapDispatchToProps = dispatch => ({
  getPrice: () => dispatch(getPrice()),
  selectPurchase: (purchase) => dispatch(selectPurchase(purchase)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPurchases);