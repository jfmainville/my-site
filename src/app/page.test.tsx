import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

jest.mock("next/image", () => {
  return function MockImage({ src, alt }: { src: string; alt: string }) {
    return <img src={src} alt={alt} />;
  };
});

describe("<Home/> Test Suite", () => {
  it("should render the <Home/> component unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
