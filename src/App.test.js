import { getQueriesForElement } from "@testing-library/react";
import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

test("ToDo", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
  const { getByText, getByLabelText } = getQueriesForElement(root);

  // after rendering our component
  // Refactoring tests so they closely align with the user experience.
  getByText("TODO");
  getByLabelText("Add TODO:");
  getByText("Add #1");
});
