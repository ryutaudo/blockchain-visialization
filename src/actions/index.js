import { getPricePromise, savePurchase } from '../utils/index';
import AddPurchase from '../containers/AddPurchase';

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
      const newPurhcase = {
        base,
        currency,
        purchased_at: `${year}-${month}-01`
      };
      savePurchase(newPurhcase);
      dispatch(addPurchaseSuccess());
    } catch(err) {
      console.error(err);
    }
  };
};

const addPurchaseSuccess = () => ({
  type: 'ADD_PURCHASE',
});

export {
  getPrice,
  addPurchase,
  selectYear,
  selectMonth,
  selectBase,
  selectCurrency,
};
