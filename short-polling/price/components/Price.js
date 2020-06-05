import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import creators from "../actions/actionCreators";
import types from "../actions/actionTypes";
import queries from "../../api/queries";

const Wrapper = styled.div`
  background-color: #18355c;
  padding: 1rem;
  min-height: 100vh;
`;

const Text = styled.p`
  color: #fff;
`;

const Amount = styled.div`
  background-color: #132948;
  padding: 0.5rem;
  color: #e6db74;
  margin: 0.5rem 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  border: 0;
  background-color: #124a84;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;

function Price() {
  const dispatch = useDispatch();
  const spotPrice = useSelector((state) => state.price.spotPrice);
  const buyPrice = useSelector((state) => state.price.buyPrice);
  const sellPrice = useSelector((state) => state.price.sellPrice);
  const [polling, setPolling] = React.useState(false);
  const spotMeta = {
    api: queries.getSpotPrice,
    success: types.GET_SPOT_PRICE_SUCCESS,
    failure: types.GET_SPOT_PRICE_FAILURE,
    cancel: types.GET_SPOT_PRICE_POLL_CANCEL,
  };
  const buyMeta = {
    api: queries.getBuyPrice,
    success: types.GET_BUY_PRICE_SUCCESS,
    failure: types.GET_BUY_PRICE_FAILURE,
    cancel: types.GET_BUY_PRICE_POLL_CANCEL,
  };
  const sellMeta = {
    api: queries.getSellPrice,
    success: types.GET_SELL_PRICE_SUCCESS,
    failure: types.GET_SELL_PRICE_FAILURE,
    cancel: types.GET_SELL_PRICE_POLL_CANCEL,
  };

  function togglePolling() {
    if (polling) {
      dispatch(creators.getSpotPricePollCancel(spotMeta));
      dispatch(creators.getBuyPricePollCancel(buyMeta));
      dispatch(creators.getSellPricePollCancel(sellMeta));
      setPolling(false);
    } else {
      dispatch(creators.getSpotPricePollStart(spotMeta));
      dispatch(creators.getBuyPricePollStart(buyMeta));
      dispatch(creators.getSellPricePollStart(sellMeta));
      setPolling(true);
    }
  }

  function getPrices() {
    dispatch(creators.getSpotPrice());
    dispatch(creators.getBuyPrice());
    dispatch(creators.getSellPrice());
  }

  return (
    <Wrapper>
      <Text>Spot price</Text>
      <Amount>{spotPrice.amount}</Amount>
      <Text>Buy price</Text>
      <Amount>{buyPrice.amount}</Amount>
      <Text>Sell price</Text>
      <Amount>{sellPrice.amount}</Amount>
      <ButtonWrapper>
        <Button onClick={getPrices}>Get prices</Button>
        <Button onClick={togglePolling}>
          {polling ? "Cancel" : "Start"} polling
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Price;
