import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

test("ToDo", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  // after rendering our component
  // use DOM APIs (query selector) to make assertions
  expect(root.querySelector("h1").textContent).toBe("TODO");
  expect(root.querySelector("label").textContent).toBe("Add TODO:");
  expect(root.querySelector("button").textContent).toBe("Add #1");
});
