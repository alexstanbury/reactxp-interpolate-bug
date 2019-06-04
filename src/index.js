import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from './setup/rootReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';


import RX from "reactxp";
import App from "./App";
// import { DEBUG, DEV } from "./config";

RX.App.initialize(false, false);
RX.UserInterface.useCustomScrollbars(false);
RX.UserInterface.setMainView(
    <Provider store={createStore(rootReducer, devToolsEnhancer())}>
        <App />
    </Provider>
);
