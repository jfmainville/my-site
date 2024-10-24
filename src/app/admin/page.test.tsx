import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AdminPage from "./page";
import { mockFetch } from "../utils/mockFetch";

describe("<AdminPage/> Test Suite", () => {
  it("should render the <AdminPage/> page unchanged", async () => {
    window.fetch = mockFetch({});
    const { container } = render(await AdminPage());
    expect(container).toMatchSnapshot();
  });

  it("should return existing posts in the <AdminPage/> page", async () => {
    window.fetch = mockFetch({
      data: [
        {
          id: "0eb6cb4f-2020-4465-bb89-c4081753c71e",
          slug: "test-blog-post-1",
          title: "Test Blog Post 1",
          content: "<h1>Test Blog Post 1</h1>",
          status: "DRAFT",
          category: "Cybersecurity",
          userId: "48eceb63-fc36-426f-85a5-58ccc850eade",
          createdAt: "2024-10-16T23:45:01.000Z",
          updatedAt: "2024-10-17T00:46:10.156Z",
        },
        {
          id: "37314b8f-6d97-4daa-affa-1717864a8e0e",
          slug: "test-blog-post-2",
          title: "Test Blog Post 2",
          content: "<h1>Test Blog Post 2</h1>",
          status: "DRAFT",
          category: "Cybersecurity",
          userId: "830ba444-6d36-401a-95cc-28646bfad2d5",
          createdAt: "2024-10-16T23:45:01.000Z",
          updatedAt: "2024-10-16T23:45:01.000Z",
        },
      ],
    });
    render(await AdminPage());
    const firstBlogPost = screen.getByText("Test Blog Post 1");
    const secondBlogPost = screen.getByText("Test Blog Post 2");
    expect(firstBlogPost).toBeInTheDocument();
    expect(secondBlogPost).toBeInTheDocument();
  });

  it("should return a placeholder if there are no posts in the <AdminPage/> page", async () => {
    window.fetch = mockFetch({
      data: null,
    });
    render(await AdminPage());
    const noPostMessage = screen.getByText("No posts");
    expect(noPostMessage).toBeInTheDocument();
  });
});
