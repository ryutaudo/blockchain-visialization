const defaultState = {
	prices: [],
	selectedYear: undefined,
	selectedMonth: undefined,
	selectedBase: undefined,
	selectedCurrency: undefined,
	selectedPurchase: undefined,
	currentView: 'AllPurchases',
	modalAddForm: false,
};

const reducer = (state = defaultState, action) => {
  console.log(state);
	switch(action.type) {
	case 'GET_PRICE': {
		return Object.assign({}, state, {
			prices: action.prices,
		});
	}
	case 'SELECT_PURCHASE': {
		return Object.assign({}, state, {
			currentView: 'SinglePurchase',
			selectedPurchase: action.selectedPurchase
		});
	}
	case 'ADD_PURCHASE': {
		return Object.assign({}, state, {
			selectedYear: undefined,
			selectedMonth: undefined,
			selectedBase: undefined,
			selectedCurrency: undefined,
			currentView: 'AllPurchases',
		});
	}
	case 'UPDATE_PURCHASE': {
		return Object.assign({}, state, {
			selectedYear: undefined,
			selectedMonth: undefined,
			selectedBase: undefined,
			selectedCurrency: undefined,
			currentView: 'AllPurchases',
		});
	}
	case 'DELETE_PURCHASE': {
		return Object.assign({}, state, {
			currentView: 'AllPurchases'
		});
	}
	case 'SELECT_YEAR': {
		return Object.assign({}, state, {
			selectedYear: action.selectedYear,
		});
	}
	case 'SELECT_MONTH': {
		return Object.assign({}, state, {
			selectedMonth: action.selectedMonth,
		});
	}
	case 'SELECT_BASE': {
		return Object.assign({}, state, {
			selectedBase: action.selectedBase,
		});
	}
	case 'SELECT_CURRENCY': {
		return Object.assign({}, state, {
			selectedCurrency: action.selectedCurrency,
		});
	}
	case 'GO_ADDFORM': {
		return Object.assign({}, state, {
			currentView: 'AddPurchase',
		});
	}
  
	case 'TOGGLE_ADD_FORM': {
		return Object.assign({}, state, {
			modalAddForm: !state.modalAddForm,
		});
	}

	default:
		return state;
	}
};

export default reducer;
