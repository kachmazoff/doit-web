import React from "react";
import { Block } from "@/components/Block";
import { BottomActions } from "./components";
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
      <BottomActions />
    </Block>
  );
};
