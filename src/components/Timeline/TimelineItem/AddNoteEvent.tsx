import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelUpAlt } from "@fortawesome/free-solid-svg-icons";
import { Block } from "@/components";
import { BottomActions, EventHeader } from "./components";
import { TimelineItemProps } from "./types";
import styles from "./timelineItem.module.css";

export const AddNoteEvent = ({ model }: TimelineItemProps) => {
  return (
    <Block className={styles.commonWrapper}>
      <EventHeader
        description="добавил новую запись"
        user={model.user}
        created={model.created}
      />
      <div className={styles.noteBody}>{model.note.body}</div>
      <div style={{ opacity: "0.7" }}>
        <Link to={`/participant/${model.participant.id}`}>
          <FontAwesomeIcon
            icon={faLevelUpAlt}
            className={styles.attachedIcon}
          />
          {model.challenge.title}
        </Link>
      </div>
      <BottomActions />
    </Block>
  );
};
