"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import TerminalButton from "../components/TerminalButton";

const PrintButton = () => (
  <TerminalButton onClick={() => window.print()}>
    <FontAwesomeIcon icon={faPrint} />
    print / save as PDF
  </TerminalButton>
);

export default PrintButton;
