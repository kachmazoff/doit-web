import React from "react";
import { Block } from "../Block";
import { Participant } from "@/types";
import { dateFormat } from "@/utils";
import styles from "./participationsList.module.css";

interface ParticipationsListProps {
  items: Participant[];
}

export const ParticipationsList = ({ items }: ParticipationsListProps) => {
  return (
    <div>
      {items.map((x) => (
        <Block key={x.id} className={styles.participant_item}>
          <h5>{x.challenge.title}</h5>
          <p className={styles.creation}>Дата начала {dateFormat(x.created)}</p>
        </Block>
      ))}
    </div>
  );
};
