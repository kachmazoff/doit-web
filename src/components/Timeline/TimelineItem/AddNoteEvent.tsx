import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelUpAlt } from "@fortawesome/free-solid-svg-icons";
import { Block } from "@/components/Block";
import { BottomActions, AuthorInfo } from "./components";
import { TimelineItemProps } from "./types";
import styles from "./timelineItem.module.css";

export const AddNoteEvent = ({ model }: TimelineItemProps) => {
  return (
    <Block className={styles.commonWrapper}>
      <div>
        <AuthorInfo user={model.user} />
        добавил новую запись
        <span className={styles.timeInfo}> &#8226; 11:23 23.03.21</span>
      </div>
      <div className={styles.noteBody}>{model.note.body}</div>
      <div style={{ opacity: "0.7" }}>
        <FontAwesomeIcon icon={faLevelUpAlt} className={styles.attachedIcon} />
        {model.challenge.title}
      </div>
      <BottomActions />
    </Block>
  );
};
