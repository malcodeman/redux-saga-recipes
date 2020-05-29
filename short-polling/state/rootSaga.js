import { all, fork } from "redux-saga/effects";

import price from "../price/sagas";

const rootSaga = function* root() {
  yield all([fork(price)]);
};

export default rootSaga;
