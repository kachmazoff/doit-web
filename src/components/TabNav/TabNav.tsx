import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./tabNav.module.css";

interface TabNavProps {
  config: { url: string; name: string; exact?: boolean }[];
}

export const TabNav = ({ config }: TabNavProps) => {
  return (
    <div>
      {config.map((tab) => (
        <NavLink
          to={tab.url}
          className={styles.tab}
          key={tab.url}
          activeClassName={styles.active}
          exact={tab.exact}
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
};
