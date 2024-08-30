import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./index";

describe("<Navbar/> Test Suite", () => {
  it("should render the <Navbar/> component unchanged", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });

  it("should contain the About link in the <Navbar/> component", async () => {
    render(<Navbar />);
    const button = screen.getByText("About");
    expect(button).toBeInTheDocument();
  });

  it("should contain the Experience link in the <Navbar/> component", async () => {
    render(<Navbar />);
    const button = screen.getByText("Experience");
    expect(button).toBeInTheDocument();
  });

  it("should contain the Blog link in the <Navbar/> component", async () => {
    render(<Navbar />);
    const button = screen.getByText("Blog");
    expect(button).toBeInTheDocument();
  });

  it("should contain the Contact link in the <Navbar/> component", async () => {
    render(<Navbar />);
    const button = screen.getByText("Contact");
    expect(button).toBeInTheDocument();
  });

  it("should contain the correct About link in the <Navbar/> component", async () => {
    render(<Navbar />);
    const button = screen.getByText("About");
    expect(button).toHaveAttribute("href", "/#about");
  });

  it("should contain the correct Experience link in the <Navbar/> component", async () => {
    render(<Navbar />);
    const button = screen.getByText("Experience");
    expect(button).toHaveAttribute("href", "/#experience");
  });

  it("should contain the correct Blog link in the <Navbar/> component", async () => {
    render(<Navbar />);
    const button = screen.getByText("Blog");
    expect(button).toHaveAttribute("href", "/#blog");
  });

  it("should contain the correct Contact link in the <Navbar/> component", async () => {
    render(<Navbar />);
    const button = screen.getByText("Contact");
    expect(button).toHaveAttribute("href", "/#contact");
  });
});
