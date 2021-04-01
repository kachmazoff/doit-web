import React from "react";
import axios, { AxiosError } from "axios";
import { Timeline, TimelineItemModel } from "@/components";

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
  const [status, setStatus] = React.useState("loading");
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

  return (
    <div>
      {status === "loading" && <p>Загрузка</p>}
      {status === "failed" && <p>Ошибка</p>}

      {status === "success" &&
        Array.isArray(timelineItems) &&
        timelineItems.length > 0 && (
          <Timeline
            items={timelineItems as TimelineItemModel[]}
            keyField="index"
          />
        )}

      {status === "success" &&
        Array.isArray(timelineItems) &&
        timelineItems.length === 0 && <p>Нет ни одной записи</p>}
    </div>
  );
};
