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

  it("points every section link in the navigation to an existing section", () => {
    const { container } = render(<Home />);
    navigation
      .filter(({ href }) => href.startsWith("/#"))
      .forEach(({ href, label }) => {
        expect(screen.getByRole("link", { name: label })).toHaveAttribute(
          "href",
          href,
        );
        expect(container.querySelector(href.slice(1))).toBeInTheDocument();
      });
  });

  it("links to the resume page from the navigation", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute(
      "href",
      "/resume",
    );
  });

  it("renders a single page heading and the footer", () => {
    render(<Home />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("contentinfo")).toHaveTextContent("exit 0");
  });
});
