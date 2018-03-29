import { connect } from 'react-redux';
import AddFormModal from '../components/AddFormModal';
import {
	selectYear,
	selectMonth,
	selectBase,
	selectCurrency,
	addPurchase,
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
	addPurchase: (year, month, base, currency) => {
		return dispatch(addPurchase(year, month, base, currency));
	},
	toggleAddForm: () => dispatch(toggleAddForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFormModal);