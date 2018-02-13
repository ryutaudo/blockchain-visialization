import { getCPricePromise } from '../utils/index';

const getPrice = () => {
  return async (dispatch) => {
    try {
      const price = await getPricePromise();
      dispatch(getPriceSuccess(price));
    } catch (err) {
      console.log(err)
    }
  };
}

const getPriceSuccess = (price) => ({
  type: 'GET_PRICE',
  price,
});

export { getPrice };
