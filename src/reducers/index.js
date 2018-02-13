const defaultState = {
  price: null,
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_PRICE': {
      return Object.assign({}, state, {
        price: action.price,
      });
    }
    default:
      return state;
  }
}

export default reducer;