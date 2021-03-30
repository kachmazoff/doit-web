import React from "react";
import styles from "./styles.module.css";

interface AuthorInfoProps {
  user?: object;
}

export const AuthorInfo = ({ user }: AuthorInfoProps) => {
  if (!!user) {
    return <span className={styles.userlink}>{`@${user.username} `}</span>;
  } else {
    return <span>Аноним </span>;
  }
};
