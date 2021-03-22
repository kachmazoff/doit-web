import React, { FC } from "react";
import styles from "./block.module.css";

export const Block: FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...rest }) => (
  <div {...rest} className={styles.block}>
    {children}
  </div>
);
