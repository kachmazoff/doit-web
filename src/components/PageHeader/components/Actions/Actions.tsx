import React from "react";
import { Dropdown } from "react-bootstrap";
import { SelectCallback } from "react-bootstrap/esm/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./actions.module.css";

const ActionsButton = React.forwardRef(({ onClick }, ref) => (
  <span
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <FontAwesomeIcon icon={faCaretDown} className={styles.moreActionsButton} />
  </span>
));

ActionsButton.displayName = "ActionsButton";

interface ActionsProps {
  onSelect?: SelectCallback;
}

export const Actions = ({ onSelect }: ActionsProps) => (
  <Dropdown onSelect={onSelect}>
    <Dropdown.Toggle as={ActionsButton} id="actions" />

    <Dropdown.Menu>
      <Dropdown.Item eventKey="logout">Выйти</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
