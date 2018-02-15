const defaultState = {
  prices: [],
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_PRICE': {
      return Object.assign({}, state, {
        prices: action.prices,
      });
    }
    default:
      return state;
  }
}

export default reducer;
