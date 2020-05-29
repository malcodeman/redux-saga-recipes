import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import creators from "../actions/actionCreators";

function Price() {
  const dispatch = useDispatch();
  const spotPrice = useSelector((state) => state.price.spotPrice);

  useEffect(() => {
    dispatch(creators.getSpotPrice());
  }, [dispatch]);

  return <div>Price - {spotPrice.amount}</div>;
}

export default Price;
