import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./scss/common.css";
import GifDataContext from "./stores/GifContext";
import DarkContext from "./stores/DarkContext";
import AccountContext from "./stores/AccountContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <AccountContext>
      <DarkContext>
        <GifDataContext>
          <App />
        </GifDataContext>
      </DarkContext>
    </AccountContext>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
