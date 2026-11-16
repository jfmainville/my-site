import { render, screen, within } from "@testing-library/react";
import { projects } from "../../content";
import Projects from ".";

describe("<Projects/>", () => {
  it("links every project card to its repository in a new tab", () => {
    render(<Projects />);
    projects.forEach((project) => {
      const card = screen.getByRole("link", { name: new RegExp(project.name) });
      expect(card).toHaveAttribute("href", project.href);
      expect(card).toHaveAttribute("target", "_blank");
      expect(card).toHaveAttribute("rel", "noreferrer");
    });
  });

  it("renders the note badge and the palette detail", () => {
    render(<Projects />);
    expect(screen.getByText("Just started")).toBeInTheDocument();
    const palette = screen.getByLabelText("Colorscheme palette");
    const colors = projects.find((p) => p.detail.kind === "palette")!.detail;
    expect(palette.children).toHaveLength(
      colors.kind === "palette" ? colors.colors.length : 0,
    );
  });

  it("renders the code snippet of the project details", () => {
    render(<Projects />);
    const card = screen.getByRole("link", { name: /revunk/ });
    expect(
      within(card).getByText("$ revunk # diffs, comments, PRs"),
    ).toBeInTheDocument();
  });
});
