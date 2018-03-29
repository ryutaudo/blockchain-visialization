import { getPricePromise, savePurchase, changePurchase, delPurchase } from '../utils/index';

const getPrice = () => {
  return async (dispatch) => {
    try {
      const prices = await getPricePromise();
      dispatch(getPriceSuccess(prices));
    } catch (err) {
      console.error(err)
    }
  };
}

const getPriceSuccess = prices => ({
  type: 'GET_PRICE',
  prices,
});

const selectYear = (selectedYear) => ({
  type: 'SELECT_YEAR',
  selectedYear,
});
const selectMonth = (selectedMonth) => ({
  type: 'SELECT_MONTH',
  selectedMonth,
});

const selectBase = (selectedBase) => ({
  type: 'SELECT_BASE',
  selectedBase,
});

const selectCurrency = (selectedCurrency) => ({
  type: 'SELECT_CURRENCY',
  selectedCurrency,
});

const addPurchase = (year, month, base, currency) => {
  return async (dispatch) => {
    try {
      const newPurchase = {
        base,
        currency,
        purchased_at: `${year}-${month}-01`
      };
      console.log('add purchase: ', newPurchase)
      await savePurchase(newPurchase);
      dispatch(addPurchaseSuccess());
    } catch(err) {
      console.error(err);
    }
  };
};

const addPurchaseSuccess = () => ({
  type: 'ADD_PURCHASE',
});

const selectPurchase = (selectedPurchase) => ({
  type: 'SELECT_PURCHASE',
  selectedPurchase
});

const updatePurchase = (year, month, base, currency, id) => {
  return async (dispatch) => {
    try {
      const newPurchase = {
        base,
        currency,
        purchased_at: `${year}-${month}-01`
      };
      await changePurchase(newPurchase, id);
      dispatch(updatePurchaseSuccess());
    } catch(err) {
      console.error(err);
    }
  };
};

const updatePurchaseSuccess = () => ({
  type: 'UPDATE_PURCHASE',
});

const deletePurchase = id => {
  return async (dispatch) => {
    try {
      await delPurchase(id);
      dispatch(deletePurchaseSuccess());
    } catch(err) {
      console.error(err);
    }
  };
};

const deletePurchaseSuccess = () => ({
  type: 'DELETE_PURCHASE',
});

const goAddForm = () => ({
  type: 'GO_ADDFORM',
});

const toggleAddForm = () => ({
  type: 'TOGGLE_ADD_FORM'
});

export {
  getPrice,
  addPurchase,
  selectYear,
  selectMonth,
  selectBase,
  selectCurrency,
  selectPurchase,
  updatePurchase,
  deletePurchase,
  goAddForm,
  toggleAddForm,
};
