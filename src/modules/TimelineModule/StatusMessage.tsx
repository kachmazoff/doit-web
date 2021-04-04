import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "./timelineModule.module.css";

const config = {
  loading: (
    <Spinner animation="border" role="status" style={{ fontSize: "1rem" }}>
      <span className="sr-only">Загрузка...</span>
    </Spinner>
  ),
  failed: "Ошибка",
  success: "Нет ни одной записи",
};

export type StatusType = keyof typeof config;

interface StatusMessageProps {
  status: StatusType;
}

export const StatusMessage = ({ status }: StatusMessageProps) => (
  <p className={styles.statusMessage}>{config[status]}</p>
);
