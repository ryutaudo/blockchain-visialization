import { connect } from 'react-redux';
import AddPurchase from '../components/AddPurchase';
import {
  selectYear,
  selectMonth,
  selectBase,
  selectCurrency,
  addPurchase,
} from '../actions/index';


const mapStateToProps = state => ({
  selectedYear: state.selectedYear,
  selectedMonth: state.selectedDate,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPurchase);