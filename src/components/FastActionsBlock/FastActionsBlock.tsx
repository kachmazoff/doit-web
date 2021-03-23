import React from "react";
import { Link } from "react-router-dom";
import { Block } from "../Block";
import styles from "./fastActions.module.css";

export const FastActionsBlock = () => {
  return (
    <Block>
      <header className={styles.header}>Быстрые действия</header>
      <ul className={styles.list}>
        <li>
          <Link to="/challenge_create" className={styles.action}>
            Создать челлендж
          </Link>
        </li>
        <li className={styles.action}>Добавить запись</li>
      </ul>
    </Block>
  );
};
