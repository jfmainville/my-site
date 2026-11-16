import { render, screen } from "@testing-library/react";
import Home from "./page";
import { navigation } from "./content";

describe("<Home/>", () => {
  it("renders every section in the design order", () => {
    const { container } = render(<Home />);
    const ids = Array.from(container.querySelectorAll("main > section")).map(
      (section) => section.id,
    );
    expect(ids).toEqual(["top", "projects", "about", "journey", "contact"]);
  });

  it("points every navigation link to an existing section", () => {
    const { container } = render(<Home />);
    navigation.forEach(({ id, label }) => {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute(
        "href",
        `#${id}`,
      );
      expect(container.querySelector(`section#${id}`)).toBeInTheDocument();
    });
  });

  it("renders a single page heading and the footer", () => {
    render(<Home />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("contentinfo")).toHaveTextContent("exit 0");
  });
});
