// import { render, screen } from '@testing-library/react';

import { render } from "@testing-library/react";
import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

// function render(component) {
//   const root = document.createElement("div");
//   ReactDOM.render(component, root);
//   return getQueriesForElement(root);
// }

test("ToDo", () => {
  const { getByText, getByLabelText } = render(<App />);

  // after rendering our component
  // use DOM APIs (query selector) to make assertions

  // expect(root.querySelector("label").textContent).toBe("Add TODO");
  expect(getByText("TODO")).not.toBeNull();
  // getByLabelText("Add TODO");
});
