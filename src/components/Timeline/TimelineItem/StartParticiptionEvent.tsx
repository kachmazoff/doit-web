import React from "react";
import { Block } from "@/components";
import { BottomActions, EventHeader } from "./components";
import { TimelineItemProps } from "./types";
import styles from "./timelineItem.module.css";

export const StartParticiptionEvent = ({ model }: TimelineItemProps) => {
  return (
    <Block className={styles.commonWrapper}>
      <EventHeader
        description="начал участвовать в челлендже"
        user={model.user}
        created={model.created}
      />
      <div className={styles.challengeTitle}>{model.challenge.title}</div>
      <BottomActions />
    </Block>
  );
};
