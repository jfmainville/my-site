import { render, screen } from "@testing-library/react";
import { journey } from "../../content";
import Journey from ".";

describe("<Journey/>", () => {
  it("renders every role in order with a unique short hash", () => {
    const { container } = render(<Journey />);
    const titles = screen
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent);
    expect(titles).toEqual(journey.map((entry) => entry.title));

    const hashes = Array.from(container.querySelectorAll("li")).map(
      (item) => item.textContent?.match(/[0-9a-f]{7}/)?.[0],
    );
    expect(new Set(hashes).size).toBe(journey.length);
  });

  it("marks the latest role as HEAD and shows the branch badge", () => {
    render(<Journey />);
    const items = screen.getAllByRole("listitem");
    expect(items[0]).toHaveTextContent("HEAD → main");
    const branchIndex = journey.findIndex((entry) => entry.branch);
    expect(items[branchIndex]).toHaveTextContent(journey[branchIndex].branch!);
  });
});
