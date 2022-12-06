import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("ToDo", () => {
  const { getByText, getByLabelText } = render(<App />);
  // after rendering our component

  getByText("TODO");
  getByLabelText("Add TODO:");
  getByText("Add #1");
});

test("add items to list", () => {
  const { getByText, getByLabelText } = render(<App />);

  // after rendering our component
  getByText("TODO");
  const input = getByLabelText("Add TODO:");
  fireEvent.change(input, { target: { value: "wash car" } });

  fireEvent.click(getByText("Add #1"));

  // confirm data
  getByText("Add #2");
  getByText("wash car");
});
