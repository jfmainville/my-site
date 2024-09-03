import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("<Home/> Test Suite", () => {
  it("should render the <Home/> component unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
