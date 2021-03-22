import React from "react";
import { Block } from "../Block";
import styles from "./fastActions.module.css";

export const FastActionsBlock = () => {
  return (
    <Block>
      <header className={styles.header}>Быстрые действия</header>
      <ul className={styles.list}>
        <li>Создать челлендж</li>
        <li>Добавить запись</li>
      </ul>
    </Block>
  );
};
