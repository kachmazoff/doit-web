import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import {
  Timeline,
  TimelineItemModel,
  StatusMessage,
  StatusType,
} from "@/components";
import { TimelineItemType } from "@/components/Timeline/TimelineItem/types";

const endpointConfig = {
  common: "/",
  own: "/own",
  personalized: "/personalized",
};

type TimelineTypes = keyof typeof endpointConfig;
interface TimelineFilters {
  userId?: string;
  type?: "common" | "subs";
  eventTypes?: TimelineItemType[];
  participantId?: string;
  challengeId?: string;
  limit?: number;
  lastIndex?: number;
  order?: "ASC" | "DESC";
}

const getTimeline = (type: TimelineTypes) => {
  const endpoint = "/api/timeline" + endpointConfig[type];
  return axios.get(endpoint).then((x) => x.data);
};

const getTimelineWithFilters = (filters: TimelineFilters) => {
  let filtersString = "";
  Object.keys(filters).forEach(
    (x: keyof TimelineFilters) => (filtersString += `${x}=${filters[x]}&`)
  );
  const endpoint = "/api/timeline?" + filtersString;
  return axios.get(endpoint).then((x) => x.data);
};

export const TimelineModule = (filters: TimelineFilters) => {
  const [status, setStatus] = useState<StatusType>("loading");
  const [timelineItems, setTimelineItems] = React.useState([]);

  React.useEffect(() => {
    setStatus("loading");

    getTimelineWithFilters(filters)
      .then((data) => {
        setTimelineItems(data);
        setStatus("success");
      })
      .catch((x: AxiosError) => {
        setStatus("failed");
      });
  }, [filters]);

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
