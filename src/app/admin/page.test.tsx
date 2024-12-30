import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AdminPage from "./page";

describe("<AdminPage/> Test Suite", () => {
  it("should render the <AdminPage/> page unchanged", () => {
    const { container } = render(<AdminPage />);
    expect(container).toMatchSnapshot();
  });
});
