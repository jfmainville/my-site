import { render, screen } from "@testing-library/react";
import Resume from "./page";

describe("<Resume/>", () => {
  it("renders the resume header and a link back home", () => {
    render(<Resume />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Jean-Frederic Mainville",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Back to the home page" }),
    ).toHaveAttribute("href", "/");
  });
});
