import React from "react";
import About from "../About";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
test("Abouts us component test", () => {
  render(<About />);
  let text = screen.getByText("About Us Page");
  expect(text).toBeInTheDocument();
});
