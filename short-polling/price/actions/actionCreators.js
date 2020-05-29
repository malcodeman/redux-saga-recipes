import types from "./actionTypes";

function getSpotPrice() {
  return {
    type: types.GET_SPOT_PRICE_REQUEST,
  };
}

export default {
  getSpotPrice,
};
