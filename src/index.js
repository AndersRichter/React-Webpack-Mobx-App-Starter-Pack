import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
