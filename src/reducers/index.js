const defaultState = {
  prices: [],
  selectedYear: undefined,
  selectedMonth: undefined,
  selectedBase: undefined,
  selectedCurrency: undefined,
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_PRICE': {
      return Object.assign({}, state, {
        prices: action.prices,
      });
    }
    case 'ADD_PURCHASE': {
      console.log(state)
      return Object.assign({}, state, {
        selectedYear: undefined,
        selectedMonth: undefined,
        selectedBase: undefined,
        selectedCurrency: undefined,
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
    default:
      return state;
  }
}

export default reducer;
