import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Contact from "./index";

describe("<Contact/> Test Suite", () => {
  it("should render the <Contact/> component unchanged", () => {
    const handleSendEmail = jest.fn();
    const { container } = render(<Contact handleSendEmail={handleSendEmail} />);
    expect(container).toMatchSnapshot();
  });

  it("should contain the Contact heading in the <Contact/> component", () => {
    const handleSendEmail = jest.fn();
    render(<Contact handleSendEmail={handleSendEmail} />);
    const heading = screen.getByText("Contact");
    expect(heading).toBeInTheDocument();
  });

  it("should contain all the required input fields in the <Contact/> component", () => {
    const handleSendEmail = jest.fn();
    render(<Contact handleSendEmail={handleSendEmail} />);
    const firstName = screen.getByLabelText("First Name");
    const lastName = screen.getByLabelText("Last Name");
    const email = screen.getByLabelText("Email");
    const phone = screen.getByLabelText("Phone");
    const message = screen.getByLabelText("Message");
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it("should fill the all the required form input fields in the <Contact/> component", () => {
    const handleSendEmail = jest.fn();
    render(<Contact handleSendEmail={handleSendEmail} />);
    const firstName = screen.getByRole("textbox", { name: "First Name" });
    const lastName = screen.getByRole("textbox", { name: "Last Name" });
    const email = screen.getByRole("textbox", { name: "Email" });
    const phone = screen.getByRole("textbox", { name: "Phone" });
    const message = screen.getByRole("textbox", { name: "Message" });
    fireEvent.change(firstName, { target: { value: "John" } });
    fireEvent.change(lastName, { target: { value: "Doe" } });
    fireEvent.change(email, { target: { value: "jdoe@test.com" } });
    fireEvent.change(phone, { target: { value: "555-555-5555" } });
    fireEvent.change(message, { target: { value: "This is a test message." } });
    expect(firstName).toHaveValue("John");
    expect(lastName).toHaveValue("Doe");
    expect(email).toHaveValue("jdoe@test.com");
    expect(phone).toHaveValue("555-555-5555");
    expect(message).toHaveValue("This is a test message.");
  });

  it("should execute the sendEmail function in the <Contact/> component", async () => {
    const handleSendEmail = jest.fn((event) => event.preventDefault());
    const user = userEvent.setup();
    render(<Contact handleSendEmail={handleSendEmail} />);
    const firstName = screen.getByRole("textbox", { name: "First Name" });
    const lastName = screen.getByRole("textbox", { name: "Last Name" });
    const email = screen.getByRole("textbox", { name: "Email" });
    const phone = screen.getByRole("textbox", { name: "Phone" });
    const message = screen.getByRole("textbox", { name: "Message" });
    fireEvent.change(firstName, { target: { value: "John" } });
    fireEvent.change(lastName, { target: { value: "Doe" } });
    fireEvent.change(email, { target: { value: "jdoe@test.com" } });
    fireEvent.change(phone, { target: { value: "555-555-5555" } });
    fireEvent.change(message, { target: { value: "This is a test message." } });

    const submit = screen.getByRole("button", { name: "Submit" });
    await user.click(submit);
    expect(handleSendEmail).toHaveBeenCalled();
  });
});
