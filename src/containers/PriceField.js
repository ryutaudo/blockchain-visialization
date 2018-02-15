import { connect } from 'react-redux';
import PriceField from '../components/PriceField';
import { getPrice } from '../actions/index';

const mapStateToProps = state => ({
  prices: state.prices,
});

const mapDispatchToProps = dispatch => ({
  getPrice: () => dispatch(getPrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceField);