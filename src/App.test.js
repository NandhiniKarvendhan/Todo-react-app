import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

test("ToDo", () => {
  const { getByText, getByLabelText } = render(<App />);
  // after rendering our component

  getByText("TODO");
  getByLabelText("Add TODO:");
  getByText("Add #1");
});
