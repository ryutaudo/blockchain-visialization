import { connect } from 'react-redux';
import SinglePurchase from '../components/SinglePurchase';
import { deletePurchase } from '../actions/index';

const mapStateToProps = state => ({
  selectedPurchase: state.selectedPurchase,
});

const mapDispatchToProps = dispatch => ({
  deletePurchase: id => {
    dispatch(deletePurchase(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePurchase);