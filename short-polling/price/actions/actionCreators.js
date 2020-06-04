import types from "./actionTypes";

function getSpotPrice() {
  return {
    type: types.GET_SPOT_PRICE_REQUEST,
  };
}

function getSpotPricePollStart(meta) {
  return {
    meta,
    type: types.GET_SPOT_PRICE_POLL_START,
  };
}

function getSpotPricePollCancel() {
  return {
    type: types.GET_SPOT_PRICE_POLL_CANCEL,
  };
}

export default {
  getSpotPrice,
  getSpotPricePollStart,
  getSpotPricePollCancel,
};
