import { render, screen } from "@testing-library/react";
import TransactiomCreateStepTwo from "./TransactionCreateStepTwo";

test("initial render, the pay button is disabled.", () => {
  render(<TransactiomCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  // screen.debug();
  expect(screen.getByRole("button", { name: /pay/i })).toBeEnabled();
});
