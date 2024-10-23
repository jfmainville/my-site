import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostPage from "./page";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: jest.fn(),
      refresh: jest.fn(),
    };
  },
}));

describe("<PostPage/> Test Suite", () => {
  it("should render the <PostPage/> page unchanged", () => {
    const { container } = render(<PostPage />);
    expect(container).toMatchSnapshot();
  });
});
