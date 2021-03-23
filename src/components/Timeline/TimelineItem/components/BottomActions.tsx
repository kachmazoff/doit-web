import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

export const BottomActions = () => {
  return (
    <div className={styles.bottomActions}>
      <span>
        <FontAwesomeIcon icon={faHeart} style={{ marginRight: "5px" }} />0
      </span>
      <span>
        <FontAwesomeIcon icon={faCommentAlt} style={{ margin: "0 5px" }} />0
      </span>
    </div>
  );
};
