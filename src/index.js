import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

/**
 * 
 * import { processTweet } from "./marketingLogic";

function update() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  output.value = processTweet(input.value);
}

document.getElementById("tweetify").addEventListener("click", update);

 */
