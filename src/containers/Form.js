import { connect } from 'react-redux';
import Form from '../components/Form';
import {
  selectYear,
  selectMonth,
  selectBase,
  selectCurrency,
  addPurchase,
  updatePurchase,
} from '../actions/index';


const mapStateToProps = state => ({
  currentView: state.currentView,
  selectedYear: state.selectedYear,
  selectedMonth: state.selectedMonth,
  selectedBase: state.selectedBase,
  selectedCurrency: state.selectedCurrency,
});

const mapDispatchToProps = dispatch => ({
  selectYear: (selectedYear) => dispatch(selectYear(selectedYear)),
  selectMonth: (selectedMonth) => dispatch(selectMonth(selectedMonth)),
  selectBase: (selectedBase) => dispatch(selectBase(selectedBase)),
  selectCurrency: (selectedCurrency) => dispatch(selectCurrency(selectedCurrency)),
  addPurchase: (year, month, base, currency) => {
    return dispatch(addPurchase(year, month, base, currency));
  },
  updatePurchase: (year, month, base, currency) => {
    return dispatch(updatePurchase(year, month, base, currency, id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);