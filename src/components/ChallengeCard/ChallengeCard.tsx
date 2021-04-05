import React from "react";
import { Block } from "@/components";
import { dateFormat } from "@/utils";
import styles from "./challengeCard.module.css";

interface ChallengeCardProps {
  model: {
    title: string;
    description?: string;
    created: string;
    author_id?: string;
  };
  type: "Челлендж" | "Дневник";
  created?: string;
}

export const ChallengeCard = ({ model, type, created }: ChallengeCardProps) => {
  return (
    <Block className={styles.wrapper}>
      <span>{type}</span>
      <h3>{model.title}</h3>
      <span>Описание</span>
      <p>{model.description || "Нет описания"}</p>
      <span>Автор</span>
      <p>{`@${model.author_id}` || "Аноним"}</p>
      <span>{type === "Челлендж" ? "Дата создания" : "Дата начала"}</span>
      <p>{dateFormat(created || model.created)}</p>
    </Block>
  );
};

ChallengeCard.defaultProps = {
  type: "Челлендж",
};
