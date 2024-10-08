import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Contact from "./index";

describe("<Contact/> Test Suite", () => {
  it("should render the <Contact/> component unchanged", () => {
    const handleSendEmail = jest.fn();
    const firstName = "";
    const setFirstName = jest.fn();
    const lastName = "";
    const setLastName = jest.fn();
    const email = "";
    const setEmail = jest.fn();
    const phone = "";
    const setPhone = jest.fn();
    const message = "";
    const setMessage = jest.fn();
    const { container } = render(
      <Contact
        handleSendEmail={handleSendEmail}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        message={message}
        setMessage={setMessage}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should contain the Contact heading in the <Contact/> component", () => {
    const handleSendEmail = jest.fn();
    const firstName = "";
    const setFirstName = jest.fn();
    const lastName = "";
    const setLastName = jest.fn();
    const email = "";
    const setEmail = jest.fn();
    const phone = "";
    const setPhone = jest.fn();
    const message = "";
    const setMessage = jest.fn();
    render(
      <Contact
        handleSendEmail={handleSendEmail}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        message={message}
        setMessage={setMessage}
      />,
    );
    const heading = screen.getByText("Contact");
    expect(heading).toBeInTheDocument();
  });

  it("should contain all the required input fields in the <Contact/> component", () => {
    const handleSendEmail = jest.fn();
    const firstName = "";
    const setFirstName = jest.fn();
    const lastName = "";
    const setLastName = jest.fn();
    const email = "";
    const setEmail = jest.fn();
    const phone = "";
    const setPhone = jest.fn();
    const message = "";
    const setMessage = jest.fn();
    render(
      <Contact
        handleSendEmail={handleSendEmail}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        message={message}
        setMessage={setMessage}
      />,
    );
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email");
    const phoneInput = screen.getByLabelText("Phone");
    const messageInput = screen.getByLabelText("Message");
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
  });

  it("should fill the all the required form input fields in the <Contact/> component", () => {
    const handleSendEmail = jest.fn();
    const firstName = "John";
    const setFirstName = jest.fn();
    const lastName = "Doe";
    const setLastName = jest.fn();
    const email = "jdoe@test.com";
    const setEmail = jest.fn();
    const phone = "555-555-5555";
    const setPhone = jest.fn();
    const message = "This is a test message.";
    const setMessage = jest.fn();
    render(
      <Contact
        handleSendEmail={handleSendEmail}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        message={message}
        setMessage={setMessage}
      />,
    );
    const firstNameInput = screen.getByRole("textbox", { name: "First Name" });
    const lastNameInput = screen.getByRole("textbox", { name: "Last Name" });
    const emailInput = screen.getByRole("textbox", { name: "Email" });
    const phoneInput = screen.getByRole("textbox", { name: "Phone" });
    const messageInput = screen.getByRole("textbox", { name: "Message" });

    expect(firstNameInput).toHaveValue("John");
    expect(lastNameInput).toHaveValue("Doe");
    expect(emailInput).toHaveValue("jdoe@test.com");
    expect(phoneInput).toHaveValue("555-555-5555");
    expect(messageInput).toHaveValue("This is a test message.");
  });

  it("should execute the sendEmail function in the <Contact/> component", async () => {
    const user = userEvent.setup();
    const handleSendEmail = jest.fn((event) => event.preventDefault());
    const firstName = "John";
    const setFirstName = jest.fn();
    const lastName = "Doe";
    const setLastName = jest.fn();
    const email = "jdoe@test.com";
    const setEmail = jest.fn();
    const phone = "555-555-5555";
    const setPhone = jest.fn();
    const message = "This is a test message.";
    const setMessage = jest.fn();
    render(
      <Contact
        handleSendEmail={handleSendEmail}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        message={message}
        setMessage={setMessage}
      />,
    );

    const submit = screen.getByRole("button", { name: "Submit" });
    await user.click(submit);
    expect(handleSendEmail).toHaveBeenCalled();
  });
});
