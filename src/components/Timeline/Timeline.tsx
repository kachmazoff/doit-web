import React from "react";
import { TimelineItem } from "./TimelineItem";

interface TimelineProps {
  items: object[];
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
