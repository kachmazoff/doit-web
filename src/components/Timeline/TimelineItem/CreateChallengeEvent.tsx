import React from "react";
import { Block } from "@/components";
import { BottomActions, EventHeader } from "./components";
import { TimelineItemProps } from "./types";
import styles from "./timelineItem.module.css";

export const CreateChallengeEvent = ({ model }: TimelineItemProps) => {
  return (
    <Block className={styles.commonWrapper}>
      <h5 className={styles.challengeTitle}>
        <span className={styles.new}>new</span>
        {model.challenge.title}
      </h5>
      {!!model.challenge.body && (
        <div className={styles.challengeDescription}>
          {model.challenge.body}
        </div>
      )}
      <EventHeader
        description="создал челлендж"
        user={model.user}
        created={model.created}
      />
      <BottomActions />
    </Block>
  );
};
