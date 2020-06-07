import { combineReducers } from "redux";

import price from "../price/reducers";

const rootReducer = combineReducers({
  price,
});

export default rootReducer;
