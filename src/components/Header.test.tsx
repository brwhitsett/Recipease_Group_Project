import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("renders logo image", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const headingLogo = screen.getByRole("img");
  expect(headingLogo).toBeInTheDocument();
});
