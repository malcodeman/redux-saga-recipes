import React from "react";
import Dom from "react-dom";
import { Provider } from "react-redux";

import store from "./state/store";
import App from "./App";

const MOUNT_NODE = document.getElementById("root");

Dom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
);
