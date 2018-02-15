import { connect } from 'react-redux';
import SinglePurchase from '../components/SinglePurchase';

const mapStateToProps = state => ({
  selectedPurchase: state.selectedPurchase,
});

const mapDispatchToProps = dispatch => ({
  deletePurchase: id => {
    dispatch(deletePurchase(id));
  },
});

export default connect(mapStateToProps)(SinglePurchase);