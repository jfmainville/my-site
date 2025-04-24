import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./index";

jest.mock("next/image", () => {
  return function MockImage({ src, alt }: { src: string; alt: string }) {
    return <img src={src} alt={alt} />;
  };
});

describe("<Header/> Test Suite", () => {
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

  it("should contain the About link in the <Header/> component", async () => {
    render(<Header />);
    const button = screen.getByText("About");
    expect(button).toBeInTheDocument();
  });

  it("should contain the Experience link in the <Header/> component", async () => {
    render(<Header />);
    const button = screen.getByText("Experience");
    expect(button).toBeInTheDocument();
  });

  it("should contain the Blog link in the <Header/> component", async () => {
    render(<Header />);
    const button = screen.getByText("Blog");
    expect(button).toBeInTheDocument();
  });

  it("should contain the Contact link in the <Header/> component", async () => {
    render(<Header />);
    const button = screen.getByText("Contact");
    expect(button).toBeInTheDocument();
  });

  it("should contain the correct About link in the <Header/> component", async () => {
    render(<Header />);
    const button = screen.getByText("About");
    expect(button).toHaveAttribute("href", "/#about");
  });

  it("should contain the correct Experience link in the <Header/> component", async () => {
    render(<Header />);
    const button = screen.getByText("Experience");
    expect(button).toHaveAttribute("href", "/#experience");
  });

  it("should contain the correct Blog link in the <Header/> component", async () => {
    render(<Header />);
    const button = screen.getByText("Blog");
    expect(button).toHaveAttribute("href", "/#blog");
  });

  it("should contain the correct Contact link in the <Header/> component", async () => {
    render(<Header />);
    const button = screen.getByText("Contact");
    expect(button).toHaveAttribute("href", "/#contact");
  });
});
