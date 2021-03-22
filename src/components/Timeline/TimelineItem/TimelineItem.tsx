import React from "react";
import { Block } from "@/components";
import { StartParticiptionEvent } from "./StartParticiptionEvent";
import { CreateChallengeEvent } from "./CreateChallengeEvent";

type TimelineItemType =
  | "CREATE_CHALLENGE"
  | "ACCEPT_CHALLENGE"
  | "ADD_NOTE"
  | "ADD_SUGGESTION";

export interface TimelineItemModel {
  id: string;
  type: TimelineItemType;
}

interface TimelineItemProps {
  model: TimelineItemModel;
}

export const TimelineItem = ({ model }: TimelineItemProps) => {
  if (model.type === "CREATE_CHALLENGE") {
    return <CreateChallengeEvent />;
  } else if (model.type === "ACCEPT_CHALLENGE") {
    return <StartParticiptionEvent />;
  }
  return <Block>TimelineItem</Block>;
};
