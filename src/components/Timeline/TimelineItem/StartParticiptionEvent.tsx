import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { Block } from "@/components/Block";
import styles from "./timelineItem.module.css";

export const StartParticiptionEvent = () => {
  return (
    <Block className={styles.commonWrapper}>
      <div>
        <span className={styles.userlink}>@kachmazoff</span> начал участвовать в
        челлендже
      </div>
      <div className={styles.challengeTitle}>Сдохни или умри</div>
      <div className={styles.timeInfo}>23.03.21</div>
      <div className={styles.bottomActions}>
        <FontAwesomeIcon icon={faHeart} style={{ marginRight: "5px" }} />
        0
        <FontAwesomeIcon
          icon={faCommentAlt}
          style={{ opacity: "0.5", margin: "0 5px 0 20px" }}
        />
        0
      </div>
    </Block>
  );
};
