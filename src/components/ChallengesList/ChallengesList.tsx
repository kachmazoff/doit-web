import React from "react";
import { Challenge } from "./Challenge";

export const ChallengesList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Challenge key={item.id} model={item} />
      ))}
    </div>
  );
};
