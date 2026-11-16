import { render, screen, within } from "@testing-library/react";
import { profile } from "../content";
import Resume from "./page";
import { experience, resume } from "./resume";

describe("<Resume/>", () => {
  it("renders the name, title and a print button", () => {
    render(<Resume />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      `${profile.firstName} ${profile.lastName}`,
    );
    expect(
      screen.getByText(resume.title, { selector: "p" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /print \/ save as PDF/ }),
    ).toBeInTheDocument();
  });

  it("lists every role with its company, dates and highlights", () => {
    render(<Resume />);
    const roles = screen.getAllByRole("heading", { level: 3 });
    expect(roles.map((role) => role.textContent)).toEqual(
      experience.map((role) => role.title),
    );
    experience.forEach((role, index) => {
      const entry = roles[index].closest("li")!;
      expect(entry).toHaveTextContent(
        `${role.company} · ${role.location} · ${role.dates}`,
      );
      expect(within(entry).getAllByRole("listitem")).toHaveLength(
        role.highlights.length,
      );
    });
  });

  it("links the email, site and social profiles", () => {
    render(<Resume />);
    expect(screen.getByRole("link", { name: profile.email })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
    profile.links.forEach(({ label, href }) => {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute(
        "href",
        href,
      );
    });
  });

  it("prints the page from the print button", () => {
    const print = jest.spyOn(window, "print").mockImplementation(() => {});
    render(<Resume />);
    screen.getByRole("button", { name: /print/ }).click();
    expect(print).toHaveBeenCalled();
  });
});
