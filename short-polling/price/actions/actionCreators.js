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

function getBuyPrice() {
  return {
    type: types.GET_BUY_PRICE_REQUEST,
  };
}

function getBuyPricePollStart(meta) {
  return {
    meta,
    type: types.GET_BUY_PRICE_POLL_START,
  };
}

function getBuyPricePollCancel() {
  return {
    type: types.GET_BUY_PRICE_POLL_CANCEL,
  };
}

function getSellPrice() {
  return {
    type: types.GET_SELL_PRICE_REQUEST,
  };
}

function getSellPricePollStart(meta) {
  return {
    meta,
    type: types.GET_SELL_PRICE_POLL_START,
  };
}

function getSellPricePollCancel() {
  return {
    type: types.GET_SELL_PRICE_POLL_CANCEL,
  };
}

export default {
  getSpotPrice,
  getSpotPricePollStart,
  getSpotPricePollCancel,
  getBuyPrice,
  getBuyPricePollStart,
  getBuyPricePollCancel,
  getSellPrice,
  getSellPricePollStart,
  getSellPricePollCancel,
};
