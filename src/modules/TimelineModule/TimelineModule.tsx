import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { Timeline, TimelineItemModel } from "@/components";
import { StatusMessage, StatusType } from "./StatusMessage";

const endpointConfig = {
  common: "/",
  own: "/own",
  personalized: "/personalized",
};

type TimelineTypes = keyof typeof endpointConfig;

const getTimeline = (type: TimelineTypes) => {
  const endpoint = "/api/timeline" + endpointConfig[type];
  return axios.get(endpoint).then((x) => x.data);
};

export const TimelineModule = ({ type }: { type: TimelineTypes }) => {
  const [status, setStatus] = useState<StatusType>("loading");
  const [timelineItems, setTimelineItems] = React.useState([]);

  React.useEffect(() => {
    setStatus("loading");

    getTimeline(type)
      .then((data) => {
        setTimelineItems(data);
        setStatus("success");
      })
      .catch((x: AxiosError) => {
        setStatus("failed");
      });
  }, [type]);

  if (
    status === "success" &&
    Array.isArray(timelineItems) &&
    timelineItems.length > 0
  ) {
    return (
      <Timeline items={timelineItems as TimelineItemModel[]} keyField="index" />
    );
  }

  return <StatusMessage status={status} />;
};
