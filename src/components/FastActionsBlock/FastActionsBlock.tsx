import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import { Block } from "../Block";
import styles from "./fastActions.module.css";

export const FastActionsBlock = () => {
  return (
    <Block>
      <header className={styles.header}>Быстрые действия</header>
      <ul className={styles.list}>
        <li>
          <Link to="/challenge_create" className={styles.action}>
            <FontAwesomeIcon icon={faPlus} />
            Создать челлендж
          </Link>
        </li>
        <li>
          <Link to="/note_create" className={styles.action}>
            <FontAwesomeIcon icon={faPen} />
            Добавить запись
          </Link>
        </li>
      </ul>
    </Block>
  );
};
