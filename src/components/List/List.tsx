import React from "react";

interface ListProps<T> {
  items: T[];
  keyField: string;
  ItemComponent: ({ model }: { model: T }) => JSX.Element;
}

// TODO: use?
export const List = ({ items, keyField, ItemComponent }: ListProps<any>) => {
  return (
    <div>
      {items.map((item) => (
        <ItemComponent key={item[keyField]} model={item} />
      ))}
    </div>
  );
};

List.defaultProps = {
  keyField: "id",
};
