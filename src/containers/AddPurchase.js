import { connect } from 'react-redux';
import AddPurchase from '../components/AddPurchase';
import {
  selectYear,
  selectMonth,
  selectBase,
  selectCurrency
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPurchase);