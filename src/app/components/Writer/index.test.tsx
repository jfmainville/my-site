import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Writer from "./index";
import { mockFetch } from "../../utils/mockFetch";
import { MY_SITE_URL } from "@/app/utils/constants";

// Mock the useRouter navigation
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: jest.fn(),
      refresh: jest.fn(),
    };
  },
}));

describe("<Writer/> Test Suite", () => {
  it("should render the <Writer/> component unchanged", () => {
    const { container } = render(<Writer />);
    expect(container).toMatchSnapshot();
  });

  it("should contain the Writer required fields in the <Writer/> component", () => {
    render(<Writer />);
    const postTitle = screen.getByPlaceholderText("Title");
    const postCategory = screen.getByPlaceholderText("Category");
    const postContent = screen.getByTestId("TipTap");
    expect(postTitle).toBeInTheDocument();
    expect(postCategory).toBeInTheDocument();
    expect(postContent).toBeInTheDocument();
  });

  it("should fill the input fields if the postData props are being passed in the <Writer/> component", () => {
    const postData = {
      id: "12345",
      title: "Test Title",
      category: "Cybersecurity",
      content: "<h1>Test Content</h1>",
    };
    render(<Writer postData={postData} />);
    const postTitle = screen.getByPlaceholderText("Title");
    const postCategory = screen.getByPlaceholderText("Category");
    expect(postTitle).toHaveValue("Test Title");
    expect(postCategory).toHaveValue("Cybersecurity");
  });

  it("should show the delete button if the postData props are being passed in the <Writer/> component", () => {
    const postData = {
      id: "12345",
      title: "Test Title",
      category: "Cybersecurity",
      content: "<h1>Test Content</h1>",
    };
    render(<Writer postData={postData} />);
    const postDeleteButton = screen.getByText("Delete");
    expect(postDeleteButton).toBeInTheDocument();
  });

  it("should not show the delete button if the postData props are not being passed in the <Writer/> component", () => {
    render(<Writer />);
    const postDeleteButton = screen.queryByText("Delete");
    expect(postDeleteButton).toBeNull();
  });

  it("should fill the input fields in the <Writer/> component", () => {
    render(<Writer />);
    const postTitle = screen.getByPlaceholderText("Title");
    const postCategory = screen.getByPlaceholderText("Category");

    fireEvent.change(postTitle, { target: { value: "Test Title" } });
    fireEvent.change(postCategory, { target: { value: "Cybersecurity" } });

    expect(postTitle).toHaveValue("Test Title");
    expect(postCategory).toHaveValue("Cybersecurity");
  });

  it("should create the post data in the <Writer/> component", () => {
    window.fetch = mockFetch({});
    render(<Writer />);
    const postTitle = screen.getByPlaceholderText("Title");
    const postCategory = screen.getByPlaceholderText("Category");
    const postSaveButton = screen.getByText("Save");

    fireEvent.change(postTitle, { target: { value: "Test Title" } });
    fireEvent.change(postCategory, { target: { value: "Cybersecurity" } });

    fireEvent.click(postSaveButton);

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(
      `${MY_SITE_URL}/api/post`,
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("should update the post in the <Writer/> component", () => {
    window.fetch = mockFetch({});
    const postData = {
      id: "12345",
      title: "Test Title",
      category: "Cybersecurity",
      content: "<h1>Test Content</h1>",
    };
    render(<Writer postData={postData} />);
    const postSaveButton = screen.getByText("Save");

    fireEvent.click(postSaveButton);

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(
      `${MY_SITE_URL}/api/post`,
      expect.objectContaining({ method: "PUT" }),
    );
  });

  it("should delete the post in the <Writer/> component", () => {
    window.fetch = mockFetch({});
    const postData = {
      id: "12345",
      title: "Test Title",
      category: "Cybersecurity",
      content: "<h1>Test Content</h1>",
    };
    render(<Writer postData={postData} />);
    const postDeleteButton = screen.getByText("Delete");

    fireEvent.click(postDeleteButton);

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(
      `${MY_SITE_URL}/api/post`,
      expect.objectContaining({ method: "DELETE" }),
    );
  });
});
