import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../api/queries";
import types from "../actions/actionTypes";

function* fetchSpotPrice() {
  try {
    const data = yield call(api.getSpotPrice);

    yield put({ type: types.GET_SPOT_PRICE_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: types.GET_SPOT_PRICE_FAILURE, message: error.message });
  }
}

function* fetchBuyPrice() {
  try {
    const data = yield call(api.getBuyPrice);

    yield put({ type: types.GET_BUY_PRICE_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: types.GET_BUY_PRICE_FAILURE, message: error.message });
  }
}

function* fetchSellPrice() {
  try {
    const data = yield call(api.getSellPrice);

    yield put({ type: types.GET_SELL_PRICE_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: types.GET_SELL_PRICE_FAILURE, message: error.message });
  }
}

function* saga() {
  yield takeLatest(types.GET_SPOT_PRICE_REQUEST, fetchSpotPrice);
  yield takeLatest(types.GET_BUY_PRICE_REQUEST, fetchBuyPrice);
  yield takeLatest(types.GET_SELL_PRICE_REQUEST, fetchSellPrice);
}

export default saga;
