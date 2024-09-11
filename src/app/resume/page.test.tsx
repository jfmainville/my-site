import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Resume from "./page";

describe("<Resume/> Test Suite", () => {
  it("should render the <Resume/> page unchanged", () => {
    const { container } = render(<Resume />);
    expect(container).toMatchSnapshot();
  });
});
