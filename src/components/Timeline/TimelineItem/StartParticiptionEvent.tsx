import React from "react";
import { Block } from "@/components/Block";
import { BottomActions, AuthorInfo } from "./components";
import { TimelineItemProps } from "./types";
import styles from "./timelineItem.module.css";

export const StartParticiptionEvent = ({ model }: TimelineItemProps) => {
  return (
    <Block className={styles.commonWrapper}>
      <div>
        <AuthorInfo user={model.user} />
        начал участвовать в челлендже
        <span className={styles.timeInfo}> &#8226; 11:23 23.03.21</span>
      </div>
      <div className={styles.challengeTitle}>{model.challenge.title}</div>
      <BottomActions />
    </Block>
  );
};
