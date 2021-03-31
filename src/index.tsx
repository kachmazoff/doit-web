import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { App } from "./App";
import { axiosConfig } from "./api";

const token = localStorage.getItem("token");
if (token !== null) {
  axiosConfig.setAuthHeader(token);
}

axiosConfig.setErrorInterceptor();

ReactDOM.render(<App />, document.getElementById("root"));
