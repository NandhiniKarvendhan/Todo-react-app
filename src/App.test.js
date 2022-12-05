import { getQueriesForElement } from "@testing-library/react";
import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

//test the render functionality for your application
function render(component) {
  const root = document.createElement("div");
  ReactDOM.render(component, root);
  return getQueriesForElement(root);
}
test("ToDo", () => {
  const { getByText, getByLabelText } = render(<App />);
  // after rendering our component

  getByText("TODO");
  getByLabelText("Add TODO:");
  getByText("Add #1");
});
