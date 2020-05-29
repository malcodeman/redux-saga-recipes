import axios from "axios";

function getSpotPrice() {
  return axios.get("https://api.coinbase.com/v2/prices/spot?currency=USD");
}

export default {
  getSpotPrice,
};
