import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./index";

describe("<Navbar/> Test Suite", () => {
  it("should render the <Navbar/> component unchanged", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });

  it("should contain the Admin text in the <Navbar/> component", async () => {
    render(<Navbar />);
    const button = screen.getByText("Admin");
    expect(button).toBeInTheDocument();
  });

  it("should contain the Logout button in the <Navbar/> component", async () => {
    render(<Navbar />);
    const button = screen.getByText("Logout");
    expect(button).toBeInTheDocument();
  });
});
