import React from "react";
import { Link } from "react-router-dom";
import { Block } from "../Block";
import styles from "./challenges.module.css";

export const Challenge = ({ model }) => {
  return (
    <Block className={styles.commonWrapper}>
      <h5 className={styles.challengeTitle}>
        {!!model.participant && <span className={styles.participant} />}
        <Link to={`/challenge/${model.id}`} style={{ color: "black" }}>
          {model.title}
        </Link>
      </h5>
      {!!model.body && (
        <div className={styles.challengeDescription}>{model.body}</div>
      )}
    </Block>
  );
};
