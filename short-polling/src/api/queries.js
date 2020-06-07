import axios from "axios";

function getSpotPrice() {
  return axios.get("https://api.coinbase.com/v2/prices/BTC-USD/spot");
}

function getBuyPrice() {
  return axios.get("https://api.coinbase.com/v2/prices/BTC-USD/buy");
}

function getSellPrice() {
  return axios.get("https://api.coinbase.com/v2/prices/BTC-USD/sell");
}

export default {
  getSpotPrice,
  getBuyPrice,
  getSellPrice,
};
