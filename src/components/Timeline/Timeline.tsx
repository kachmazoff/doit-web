import React from "react";
import { TimelineItem } from "./TimelineItem";
import { TimelineItemModel } from "./TimelineItem/TimelineItem";

interface TimelineProps {
  items: TimelineItemModel[];
}

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <div>
      {items.map((item) => (
        <TimelineItem key={item.id} model={item} />
      ))}
    </div>
  );
};
