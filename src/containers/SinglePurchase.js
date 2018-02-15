import { connect } from 'react-redux';
import SinglePurchase from '../components/SinglePurchase';

const mapStateToProps = state => ({
  selectedPurchase: state.selectedPurchase,
});

export default connect(mapStateToProps)(SinglePurchase);