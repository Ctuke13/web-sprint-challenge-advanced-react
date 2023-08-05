import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AppClass from "./AppClass";
import AppFunctional from "./AppFunctional";

// Write your tests here
test("sanity", () => {
  expect(true).toBe(false);
});

it('renders heading "Welcome to the GRID', () => {
  render(<AppFunctional />);

  const h1 = screen.getByRole("h1");

  expect(h1).toBeInTheDocument;
  expect(h1).toHaveTextContent(/welcome to the grid/i);
});

it("renders directionalbuttons", () => {
  render(<AppFunctional />);

  const leftButton = screen.getByRole("button", { name: /left/i });
  expect(leftButton).toBeInTheDocument();

  const rightButton = screen.getByRole("button", { name: /right/i });
  expect(rightButton).toBeInTheDocument();

  const upButton = screen.getByRole("button", { name: /up/i });
  expect(upButton).toBeInTheDocument();

  const downButton = screen.getByRole("button", { name: /down/i });
  expect(downButton).toBeInTheDocument();
});

it('renders "Class-Based" link', () => {
  render(<AppFunctional />);
  const classBasedLink = screen.getByRole("link", { name: /class-based/i });
  expect(classBasedLink).toBeInTheDocument();
});

it("values change when types in email input", () => {
  render(<AppFunctional />);

  const emailInput = screen.getByPlaceholder(/type email/i);
  userEvent.type(emailInput, "abc@123.xzy");

  expect(emailInput).toHaveTextContent("abc@123.xyz");
});
