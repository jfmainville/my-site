import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostPage from "./page";
import { getPosts } from "@/app/lib/db";

jest.mock("../../lib/db");

jest.mock("next/image", () => {
  return function MockImage({ src, alt }: { src: string; alt: string }) {
    return <img src={src} alt={alt} />;
  };
});

describe("<PostPage/> Test Suite", () => {
  it("should render the <PostPage/> page unchanged", async () => {
    const { container } = render(await PostPage());
    expect(container).toMatchSnapshot();
  });

  it("should return existing posts in the <PostPage/> page", async () => {
    (getPosts as jest.Mock).mockResolvedValueOnce([
      {
        id: "0eb6cb4f-2020-4465-bb89-c4081753c71e",
        slug: "test-blog-post-1",
        title: "Test Blog Post 1",
        content: "<h1>Test Blog Post 1</h1>",
        status: "DRAFT",
        category: "Cybersecurity",
        userId: "48eceb63-fc36-426f-85a5-58ccc850eade",
      },
      {
        id: "37314b8f-6d97-4daa-affa-1717864a8e0e",
        slug: "test-blog-post-2",
        title: "Test Blog Post 2",
        content: "<h1>Test Blog Post 2</h1>",
        status: "DRAFT",
        category: "Cybersecurity",
        userId: "830ba444-6d36-401a-95cc-28646bfad2d5",
      },
    ]);
    render(await PostPage());
    const firstBlogPost = screen.getByText("Test Blog Post 1");
    const secondBlogPost = screen.getByText("Test Blog Post 2");
    expect(firstBlogPost).toBeInTheDocument();
    expect(secondBlogPost).toBeInTheDocument();
  });

  it("should return a placeholder if there are no posts in the <AdminPage/> page", async () => {
    render(await PostPage());
    const noPostMessage = screen.getByText("No posts");
    expect(noPostMessage).toBeInTheDocument();
  });
});
