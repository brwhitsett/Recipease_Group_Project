import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

test("renders footer text", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const footerText = screen.getByText(
    "Recipease ©️ Copyright 2022 All Rights Reserved"
  );
  expect(footerText).toBeInTheDocument();
});
