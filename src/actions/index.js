import { getPricePromise } from '../utils/index';

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

const selectBase = (selecteBase) => ({
  type: 'SELECT_BASE',
  selecteBase,
});

const selectCurrency = (selectedCurrency) => ({
  type: 'SELECT_CURRENCY',
  selectedCurrency,
});

export { getPrice };
