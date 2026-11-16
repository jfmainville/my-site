import { act, fireEvent, render, screen } from "@testing-library/react";
import { profile } from "../../content";
import Contact from ".";

describe("<Contact/>", () => {
  it("links the email address with mailto", () => {
    render(<Contact />);
    expect(
      screen.getByRole("link", { name: new RegExp(profile.email) }),
    ).toHaveAttribute("href", `mailto:${profile.email}`);
  });

  it("copies the email address and confirms it", async () => {
    const writeText = jest.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    render(<Contact />);

    await act(async () =>
      fireEvent.click(screen.getByRole("button", { name: /copy email/ })),
    );

    expect(writeText).toHaveBeenCalledWith(profile.email);
    expect(screen.getByRole("button", { name: /copied/ })).toBeInTheDocument();
  });

  it("renders the location and external links", () => {
    render(<Contact />);
    expect(screen.getByText(profile.location)).toBeInTheDocument();
    profile.links.forEach(({ label, href }) => {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute(
        "href",
        href,
      );
    });
  });
});
