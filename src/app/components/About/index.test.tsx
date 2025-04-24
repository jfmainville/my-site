import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./index";

jest.mock("next/image", () => {
  return function MockImage({ src, alt }: { src: string; alt: string }) {
    return <img src={src} alt={alt} />;
  };
});

describe("<About/> Test Suite", () => {
  it("should show my profile description in the <About /> component", () => {
    render(<About />);
    const profileDescription = screen.getByText(
      "I am an experienced professional",
      {
        exact: false,
      },
    );
    expect(profileDescription).toBeInTheDocument();
  });

  it("should show my profile picture in the <About /> component", () => {
    render(<About />);
    const profilePicture = screen.getByRole("presentation");
    expect(profilePicture).toBeInTheDocument();
  });
});
