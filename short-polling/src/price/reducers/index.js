import types from "../actions/actionTypes";

const initial = {
  spotPrice: { base: "BTC", currency: "USD", amount: "0" },
  buyPrice: { base: "BTC", currency: "USD", amount: "0" },
  sellPrice: { base: "BTC", currency: "USD", amount: "0" },
};

function price(state = initial, action) {
  switch (action.type) {
    case types.GET_SPOT_PRICE_SUCCESS:
      return {
        ...state,
        spotPrice: action.payload.data,
      };
    case types.GET_BUY_PRICE_SUCCESS:
      return {
        ...state,
        buyPrice: action.payload.data,
      };
    case types.GET_SELL_PRICE_SUCCESS:
      return {
        ...state,
        sellPrice: action.payload.data,
      };
    default:
      return state;
  }
}

export default price;
