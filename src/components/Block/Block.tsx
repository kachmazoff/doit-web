import React, { FC, useState } from "react";
import styles from "./block.module.css";

export const Block: FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...rest }) => {
  const [classNames, setClassNames] = useState<string>(styles.block);

  React.useEffect(() => {
    setClassNames((className || "") + " " + styles.block);
  }, [className]);

  return (
    <div {...rest} className={classNames}>
      {children}
    </div>
  );
};
