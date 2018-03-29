import { connect } from 'react-redux';
import UpdateFormModal from '../components/UpdateFormModal';
import {
	selectYear,
	selectMonth,
	selectBase,
	selectCurrency,
  updatePurchase,
  deletePurchase,
	toggleAddForm,
} from '../actions/index';


const mapStateToProps = state => ({
	currentView: state.currentView,
	selectedYear: state.selectedYear,
	selectedMonth: state.selectedMonth,
	selectedBase: state.selectedBase,
	selectedCurrency: state.selectedCurrency,
	selectedPurchase: state.selectedPurchase,
	modalAddForm: state.modalAddForm,
});

const mapDispatchToProps = dispatch => ({
	selectYear: (selectedYear) => dispatch(selectYear(selectedYear)),
	selectMonth: (selectedMonth) => dispatch(selectMonth(selectedMonth)),
	selectBase: (selectedBase) => dispatch(selectBase(selectedBase)),
	selectCurrency: (selectedCurrency) => dispatch(selectCurrency(selectedCurrency)),
	updatePurchase: (year, month, base, currency) => {
		return dispatch(updatePurchase(year, month, base, currency));
	},
	deletePurchase: id => {
		dispatch(deletePurchase(id));
	},
	toggleAddForm: () => dispatch(toggleAddForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFormModal);