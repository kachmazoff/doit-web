import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./menu.module.css";

export const Menu = () => {
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} />
          Главная
        </li>
        <li>
          <FontAwesomeIcon icon={faCompass} />
          Навигатор
        </li>
        <li>
          <FontAwesomeIcon icon={faBookOpen} />
          Мои дневники
        </li>
      </ul>
    </nav>
  );
};
