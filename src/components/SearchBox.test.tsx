import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchBox from "./SearchBox";

test("query updates on form input", () => {
  render(
    <BrowserRouter>
      <SearchBox />
    </BrowserRouter>
  );
  const inputEl = screen.getByRole("textbox");
  fireEvent.change(inputEl, { target: { value: "apple" } });
  const testEl = screen.getByDisplayValue("apple");
  expect(testEl).toHaveValue("apple");
});

test("diet updates on form input", () => {
  render(
    <BrowserRouter>
      <SearchBox />
    </BrowserRouter>
  );
  const inputDiet = screen.getByLabelText("label-test");
  fireEvent.change(inputDiet, { target: { value: "vegan" } });
  const testDiet = screen.getByDisplayValue("Vegan");
  expect(testDiet).toHaveValue("vegan");
});

test("mealType updates on form input", () => {
  render(
    <BrowserRouter>
      <SearchBox />
    </BrowserRouter>
  );
  const inputMealType = screen.getByLabelText("test-meal");
  fireEvent.change(inputMealType, { target: { value: "dinner" } });
  const testMeal = screen.getByDisplayValue("Dinner");
  expect(testMeal).toHaveValue("dinner");
});
