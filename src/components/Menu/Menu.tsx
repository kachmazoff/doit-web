import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faBookOpen,
  faBullseye,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./menu.module.css";

export const Menu = () => {
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            <FontAwesomeIcon icon={faHome} />
            Главная
          </Link>
        </li>
        <li>
          <Link to="/explore" className={styles.link}>
            <FontAwesomeIcon icon={faCompass} />
            Навигатор
          </Link>
        </li>
        <li>
          <Link to="/participations" className={styles.link}>
            <FontAwesomeIcon icon={faBookOpen} />
            Мои дневники
          </Link>
        </li>
        <li>
          <Link to="/challenges" className={styles.link}>
            <FontAwesomeIcon icon={faBullseye} />
            Челленджи
          </Link>
        </li>
        <li>
          <Link to="/users" className={styles.link}>
            <FontAwesomeIcon icon={faUsers} />
            Пользователи
          </Link>
        </li>
      </ul>
    </nav>
  );
};
