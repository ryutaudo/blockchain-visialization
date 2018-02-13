import { connect } from 'react-redux';
import PriceField from '../components/PriceField';
import { getPrice } from '../actions/index';

const mapStateToProps = state => ({
  price: state.price,
});

const mapDispatchToProps = dispatch => ({
  getPrice: () => dispatch(getPrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceField);