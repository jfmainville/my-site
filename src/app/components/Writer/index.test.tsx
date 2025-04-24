import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Writer from "./index";
import { createPost, updatePost, deletePost } from "../../lib/db";

jest.mock("../../lib/db");

describe("<Writer/> Test Suite", () => {
  it("should contain the Writer required fields in the <Writer/> component", () => {
    render(<Writer />);
    const postTitle = screen.getByPlaceholderText("Title");
    const postCategory = screen.getByPlaceholderText("Category");
    const postThumbnail = screen.getByPlaceholderText("Thumbnail");
    const postStatus = screen.getByPlaceholderText("Status");
    const postContent = screen.getByTestId("TipTap");
    expect(postTitle).toBeInTheDocument();
    expect(postCategory).toBeInTheDocument();
    expect(postThumbnail).toBeInTheDocument();
    expect(postStatus).toBeInTheDocument();
    expect(postContent).toBeInTheDocument();
  });

  it("should fill the input fields if the postData props are being passed in the <Writer/> component", () => {
    const postData = {
      id: "12345",
      title: "Test Title",
      category: "Cybersecurity",
      thumbnail:
        "https://images.unsplash.com/photo-1725714834773-b5f278346915?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "DRAFT",
      content: "<h1>Test Content</h1>",
    };
    render(<Writer postData={postData} />);
    const postTitle = screen.getByPlaceholderText("Title");
    const postCategory = screen.getByPlaceholderText("Category");
    const postThumbnail = screen.getByPlaceholderText("Thumbnail");
    const postStatus = screen.getByPlaceholderText("Status");
    expect(postTitle).toHaveValue("Test Title");
    expect(postCategory).toHaveValue("Cybersecurity");
    expect(postThumbnail).toHaveValue(
      "https://images.unsplash.com/photo-1725714834773-b5f278346915?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    );
    expect(postStatus).toHaveValue("DRAFT");
  });

  it("should show the delete button if the postData props are being passed in the <Writer/> component", () => {
    const postData = {
      id: "12345",
      title: "Test Title",
      category: "Cybersecurity",
      thumbnail:
        "https://images.unsplash.com/photo-1725714834773-b5f278346915?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "DRAFT",
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
    const postThumbnail = screen.getByPlaceholderText("Thumbnail");
    const postStatus = screen.getByPlaceholderText("Status");

    fireEvent.change(postTitle, { target: { value: "Test Title" } });
    fireEvent.change(postCategory, { target: { value: "Cybersecurity" } });
    fireEvent.change(postThumbnail, { target: { value: "" } });
    fireEvent.change(postStatus, { target: { value: "DRAFT" } });

    expect(postTitle).toHaveValue("Test Title");
    expect(postCategory).toHaveValue("Cybersecurity");
    expect(postThumbnail).toHaveValue("");
    expect(postStatus).toHaveValue("DRAFT");
  });

  it("should create the post data in the <Writer/> component", () => {
    const userData = {
      id: "seed-user-1",
      firstName: "Tony",
      lastName: "Stark",
      username: "tstark",
      email: "tstark@test.com",
      createdAt: "2025-01-20T01:51:31.356Z",
      updatedAt: "2025-01-20T01:51:31.356Z",
    };

    render(<Writer userData={userData} />);
    const postTitle = screen.getByPlaceholderText("Title");
    const postCategory = screen.getByPlaceholderText("Category");
    const postThumbnail = screen.getByPlaceholderText("Thumbnail");
    const postStatus = screen.getByPlaceholderText("Status");
    const postCreateButton = screen.getByText("Create");

    fireEvent.change(postTitle, { target: { value: "Test Title" } });
    fireEvent.change(postCategory, { target: { value: "Cybersecurity" } });
    fireEvent.change(postThumbnail, { target: { value: "" } });
    fireEvent.change(postStatus, { target: { value: "DRAFT" } });

    fireEvent.click(postCreateButton);

    expect(createPost as jest.Mock).toHaveBeenCalledTimes(1);
    expect(createPost as jest.Mock).toHaveBeenCalledWith(
      "Test Title",
      "Cybersecurity",
      "",
      "DRAFT",
      "Enter text here...",
      {
        id: "seed-user-1",
        firstName: "Tony",
        lastName: "Stark",
        username: "tstark",
        email: "tstark@test.com",
        createdAt: "2025-01-20T01:51:31.356Z",
        updatedAt: "2025-01-20T01:51:31.356Z",
      },
    );
  });

  it("should update the post in the <Writer/> component", () => {
    const postData = {
      id: "12345",
      title: "Test Title",
      category: "Cybersecurity",
      thumbnail: "",
      status: "DRAFT",
      content: "<h1>Test Content</h1>",
    };
    const userData = {
      id: "seed-user-1",
      firstName: "Tony",
      lastName: "Stark",
      username: "tstark",
      email: "tstark@test.com",
      createdAt: "2025-01-20T01:51:31.356Z",
      updatedAt: "2025-01-20T01:51:31.356Z",
    };

    render(<Writer postData={postData} userData={userData} />);
    const postSaveButton = screen.getByText("Update");

    fireEvent.click(postSaveButton);

    expect(updatePost as jest.Mock).toHaveBeenCalledTimes(1);
    expect(updatePost as jest.Mock).toHaveBeenCalledWith(
      {
        id: "12345",
        title: "Test Title",
        category: "Cybersecurity",
        thumbnail: "",
        status: "DRAFT",
        content: "<h1>Test Content</h1>",
      },
      "Test Title",
      "",
      "<h1>Test Content</h1>",
      "Cybersecurity",
      "DRAFT",
      {
        id: "seed-user-1",
        firstName: "Tony",
        lastName: "Stark",
        username: "tstark",
        email: "tstark@test.com",
        createdAt: "2025-01-20T01:51:31.356Z",
        updatedAt: "2025-01-20T01:51:31.356Z",
      },
    );
  });

  it("should delete the post in the <Writer/> component", () => {
    const postData = {
      id: "12345",
      title: "Test Title",
      category: "Cybersecurity",
      thumbnail: "",
      status: "DRAFT",
      content: "<h1>Test Content</h1>",
    };
    render(<Writer postData={postData} />);
    const postDeleteButton = screen.getByText("Delete");

    fireEvent.click(postDeleteButton);

    expect(deletePost as jest.Mock).toHaveBeenCalledTimes(1);
    expect(deletePost as jest.Mock).toHaveBeenCalledWith("12345");
  });
});
