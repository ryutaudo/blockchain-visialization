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

const getPriceSuccess = (prices) => ({
  type: 'GET_PRICE',
  prices,
});

export { getPrice };
