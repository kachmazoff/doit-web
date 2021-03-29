import React from "react";
import { Block } from "@/components/Block";
import { BottomActions, AuthorInfo } from "./components";
import { TimelineItemProps } from "./types";
import styles from "./timelineItem.module.css";

export const CreateChallengeEvent = ({ model }: TimelineItemProps) => {
  return (
    <Block className={styles.commonWrapper}>
      <div>
        <AuthorInfo user={model.user} />
        создал челлендж
        <span className={styles.timeInfo}> &#8226; 11:23 23.03.21</span>
      </div>
      <div className={styles.challengeTitle}>{model.challenge.title}</div>
      {!!model.challenge.body && (
        <div className={styles.challengeDescription}>
          {model.challenge.body}
        </div>
      )}
      <BottomActions />
    </Block>
  );
};
