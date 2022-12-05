import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

test("ToDo", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
});
