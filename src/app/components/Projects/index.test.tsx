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

  it("shows each project's language and only the fluovibe palette", () => {
    render(<Projects />);
    projects.forEach((project) => {
      const card = screen.getByRole("link", { name: new RegExp(project.name) });
      expect(within(card).getByText(project.language)).toBeInTheDocument();
    });
    const palette = screen.getByLabelText("Colorscheme palette");
    expect(palette.children).toHaveLength(
      projects.find((project) => project.palette)!.palette!.length,
    );
    expect(screen.getAllByLabelText("Colorscheme palette")).toHaveLength(1);
  });
});
