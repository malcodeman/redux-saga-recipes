import React from "react";
import { useDispatch, useSelector } from "react-redux";

import creators from "../actions/actionCreators";
import types from "../actions/actionTypes";
import queries from "../../api/queries";

function Price() {
  const dispatch = useDispatch();
  const spotPrice = useSelector((state) => state.price.spotPrice);
  const [polling, setPolling] = React.useState(false);
  const meta = {
    api: queries.getSpotPrice,
    success: types.GET_SPOT_PRICE_SUCCESS,
    failure: types.GET_SPOT_PRICE_FAILURE,
    cancel: types.GET_SPOT_PRICE_POLL_CANCEL,
  };

  function togglePolling() {
    if (polling) {
      dispatch(creators.getSpotPricePollCancel(meta));
      setPolling(false);
    } else {
      dispatch(creators.getSpotPricePollStart(meta));
      setPolling(true);
    }
  }

  return (
    <div>
      <div>Price - {spotPrice.amount}</div>
      <div>
        <button
          onClick={() => dispatch(creators.getSpotPrice())}
          disabled={polling}
        >
          Get price
        </button>
        <button onClick={togglePolling}>
          {polling ? "Cancel" : "Start"} polling
        </button>
      </div>
    </div>
  );
}

export default Price;
