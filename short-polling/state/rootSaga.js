import { all, fork } from "redux-saga/effects";

import race from "../sagas/race";
import price from "../price/sagas";

const rootSaga = function* root() {
  yield all([fork(race), fork(price)]);
};

export default rootSaga;
