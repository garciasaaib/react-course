import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { AsyncList } from "./AsyncList";

// getByText is a sync function
// findByText is an async function, and wait for the element to be in the dom
test("AsyncList", async () => {
  render(<AsyncList />);

  const burguer = await screen.findByText(/ssHamburguer/i);
  expect(burguer).toBeInTheDocument();


})
