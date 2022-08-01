import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactiomCreateStepTwo from "./TransactionCreateStepTwo";

// to test if the button is disabled

test("initial render, the pay button is disabled.", async () => {
  render(<TransactiomCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if an amount and note is entered, the request and pay button is enabled ", async () => {
  render(<TransactiomCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});

// 1. enzyme
//   Similar to unit tests to test props, state and methods inside components
// 2. testing-library
//   Unlike enzyme to see how data changed or motified, testing-library is focused on the view part

// 1. unit test
