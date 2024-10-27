import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Experience from "./index";

describe("<Experience/> Test Suite", () => {
  it("should render the <Experience/> component unchanged", () => {
    const { container } = render(<Experience />);
    expect(container).toMatchSnapshot();
  });

  it("should show the correct amount of experiences in the <Experience /> component", () => {
    render(<Experience />);
    const roleSystemAdministrator = screen.getAllByText(
      "System Administrator",
      {
        exact: false,
      },
    );
    const roleSecurityAnalyst = screen.getAllByText("Security Analyst", {
      exact: false,
    });
    const roleFullStackDeveloper = screen.getAllByText("Full-Stack Developer", {
      exact: false,
    });
    const roleDevOpsSpecialist = screen.getAllByText("DevOps Specialist", {
      exact: false,
    });
    const roleTechnicalProductOwner = screen.getAllByText(
      "Technical Product Owner",
      {
        exact: false,
      },
    );
    const roleDevSecOpsSpecialist = screen.getAllByText(
      "DevSecOps Specialist",
      {
        exact: false,
      },
    );
    expect(roleSystemAdministrator).toHaveLength(2);
    expect(roleSecurityAnalyst).toHaveLength(2);
    expect(roleFullStackDeveloper).toHaveLength(2);
    expect(roleDevOpsSpecialist).toHaveLength(2);
    expect(roleTechnicalProductOwner).toHaveLength(2);
    expect(roleDevSecOpsSpecialist).toHaveLength(2);
  });

  it("should show the correct amount of company logos in the <Experience /> component", () => {
    render(<Experience />);
    const companyLogos = screen.getAllByRole("presentation");
    expect(companyLogos).toHaveLength(6);
  });
});
