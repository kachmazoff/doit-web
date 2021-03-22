import React, { FC, useState } from "react";
import styles from "./block.module.css";

const getBlockStyle = (transparent: boolean) =>
  transparent ? styles.block_transparent : styles.block;

export const Block: FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { transparent?: boolean }
> = ({ children, transparent, className, ...rest }) => {
  const [classNames, setClassNames] = useState<string>(
    getBlockStyle(!!transparent)
  );

  React.useEffect(() => {
    setClassNames([className || "", getBlockStyle(!!transparent)].join(" "));
  }, [className, transparent]);

  return (
    <div {...rest} className={classNames}>
      {children}
    </div>
  );
};
