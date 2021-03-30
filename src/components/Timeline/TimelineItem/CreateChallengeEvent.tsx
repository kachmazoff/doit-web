import React from "react";
import { Block } from "@/components";
import { BottomActions, EventHeader } from "./components";
import { TimelineItemProps } from "./types";
import styles from "./timelineItem.module.css";

export const CreateChallengeEvent = ({ model }: TimelineItemProps) => {
  return (
    <Block className={styles.commonWrapper}>
      <EventHeader
        description="создал челлендж"
        user={model.user}
        created={model.created}
      />
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
