import { call, put, delay, take, race } from "redux-saga/effects";

function* task(action) {
  while (true) {
    try {
      const { api, success } = action.meta;
      const data = yield call(api);

      yield put({
        type: success,
        payload: data.data,
      });
      yield delay(4000);
    } catch (error) {
      const { failure, cancel } = action.meta;

      yield put({
        type: failure,
        message: error.message,
      });
      yield put({
        type: cancel,
        mmessage: error.mmessage,
      });
    }
  }
}

function* saga() {
  while (true) {
    const action = yield take((action) => /(.*)_POLL_START/.test(action.type));

    yield race([
      call(task, action),
      take((action) => /(.*)_POLL_CANCEL/.test(action.type)),
    ]);
  }
}

export default saga;
