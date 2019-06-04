import React from "react";

import RX from "reactxp";
import App from "./App";

RX.App.initialize(false, false);
RX.UserInterface.useCustomScrollbars(false);
RX.UserInterface.setMainView(
        <App />
);
