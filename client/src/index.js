import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <SkeletonTheme baseColor='#2d455e' highlightColor='#a39f9f'>
          <App />
        </SkeletonTheme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();
