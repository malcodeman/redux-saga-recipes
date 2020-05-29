import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../api/queries";
import types from "../actions/actionTypes";

function* fetchSpotPrice() {
  try {
    const data = yield call(api.getSpotPrice);

    yield put({ type: types.GET_SPOT_PRICE_SUCCESS, payload: data.data.data });
  } catch (error) {
    yield put({ type: types.GET_SPOT_PRICE_FAILURE, message: error.message });
  }
}

function* saga() {
  yield takeLatest(types.GET_SPOT_PRICE_REQUEST, fetchSpotPrice);
}

export default saga;
