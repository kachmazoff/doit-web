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
        <span className={styles.timeInfo}> &#8226; 11:23 23.03.21</span>
      </div>
      <div className={styles.challengeTitle}>Сдохни или умри</div>
      <BottomActions />
    </Block>
  );
};
