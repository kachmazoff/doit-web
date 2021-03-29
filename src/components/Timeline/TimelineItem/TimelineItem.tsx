import React from "react";
import { Block } from "@/components";
import { StartParticiptionEvent } from "./StartParticiptionEvent";
import { CreateChallengeEvent } from "./CreateChallengeEvent";
import { AddNoteEvent } from "./AddNoteEvent";
import { TimelineItemProps } from "./types";

export const TimelineItem = ({ model }: TimelineItemProps) => {
  if (model.type === "CREATE_CHALLENGE") {
    return <CreateChallengeEvent model={model} />;
  } else if (model.type === "ACCEPT_CHALLENGE") {
    return <StartParticiptionEvent model={model} />;
  } else if (model.type === "ADD_NOTE") {
    return <AddNoteEvent model={model} />;
  }
  return <Block>TimelineItem</Block>;
};
