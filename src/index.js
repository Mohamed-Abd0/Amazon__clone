import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import "./index.css";
import Store from "./Store/Store";

import {ThemeProvider } from "@mui/material";
import { lightTheme } from "./Theme/Theme";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <Provider store={Store}>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);
