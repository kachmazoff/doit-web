import React from "react";
import { dateFormat } from "@/utils";
import { AuthorInfo } from "./AuthorInfo";
import styles from "./styles.module.css";

interface EventHeaderProps {
  description: string;
  user?: object;
  created: string;
}

export const EventHeader = ({
  description,
  user,
  created,
}: EventHeaderProps) => {
  return (
    <div>
      <AuthorInfo user={user} />
      {`${description} `}
      <span className={styles.timeInfo}>&#8226; {dateFormat(created)}</span>
    </div>
  );
};
