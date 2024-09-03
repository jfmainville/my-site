import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./index";

describe("<Header/> Test Suite", () => {
  it("should render the <Header/> component unchanged", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it("should show the header text in the <Header /> component", () => {
    render(<Header />);
    const headerText = screen.getByText(
      "Hey, I'm Jean-Frederic, welcome to my site! 🔥",
    );
    expect(headerText).toBeInTheDocument();
  });

  it("should show the background picture in the <Header /> component", () => {
    render(<Header />);
    const backgroundPicture = screen.getByRole("presentation");
    expect(backgroundPicture).toBeInTheDocument();
  });
});
