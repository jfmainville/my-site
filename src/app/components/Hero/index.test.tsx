import { act, fireEvent, render, screen } from "@testing-library/react";
import { interests, profile } from "../../content";
import Hero from ".";

describe("<Hero/>", () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it("renders the name, pitch and a link to the projects", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      `${profile.firstName}${profile.lastName}.`,
    );
    expect(screen.getByText(profile.pitch)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /ls ~\/projects/ }),
    ).toHaveAttribute("href", "#projects");
  });

  it("types the first role", () => {
    render(<Hero />);
    for (let index = 0; index < profile.roles[0].length; index += 1) {
      act(() => jest.advanceTimersByTime(72));
    }
    expect(screen.getByText(profile.roles[0])).toBeInTheDocument();
  });

  it("runs the pipeline to completion and restarts it on re-run", () => {
    render(<Hero />);
    const status = screen.getByRole("status");
    expect(status).toHaveTextContent(`loading 1/${interests.length}`);

    act(() => jest.advanceTimersByTime(700 + interests.length * 520));
    expect(status).toHaveTextContent(
      `~/.config loaded · ${interests.length} things I'm into`,
    );

    fireEvent.click(screen.getByRole("button", { name: /re-run/ }));
    expect(status).toHaveTextContent(`loading 1/${interests.length}`);
  });

  it("lists every interest as a pipeline stage", () => {
    render(<Hero />);
    const stages = screen.getByRole("list", {
      name: "What I'm into right now",
    });
    expect(stages.children).toHaveLength(interests.length);
  });
});
