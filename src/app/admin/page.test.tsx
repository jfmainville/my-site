import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AdminPage from "./page";

jest.mock("@auth0/nextjs-auth0", () => ({
  getSession: jest.fn(),
}));

describe("<AdminPage/> Test Suite", () => {
  it("should render the <AdminPage/> page unchanged", async () => {
    const { container } = render(await AdminPage());
    expect(container).toMatchSnapshot();
  });
});
