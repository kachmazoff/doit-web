import React from "react";
import { TimelineItem } from "./TimelineItem";
import { TimelineItemModel } from "./TimelineItem/TimelineItem";

interface TimelineProps {
  items: TimelineItemModel[];
  keyField: string;
}

export const Timeline = ({ items, keyField }: TimelineProps) => {
  return (
    <div>
      {items.map((item) => (
        <TimelineItem key={item[keyField]} model={item} />
      ))}
    </div>
  );
};

Timeline.defaultProps = {
  keyField: "id",
};
