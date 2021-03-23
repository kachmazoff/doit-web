import React, { FC } from "react";
import styles from "./button.module.css";

export const Button: FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={[styles.btn, className || ""].join(" ")}>
      {children}
    </button>
  );
};
