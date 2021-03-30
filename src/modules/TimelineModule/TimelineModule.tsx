import React from "react";
import axios, { AxiosError } from "axios";
import { Timeline, TimelineItemModel } from "@/components";

const endpointConfig = {
  common: "/",
  own: "/own",
  personalized: "/personalized",
};

const getHeaders = () => {
  const token = localStorage.getItem("token");

  const headers = {};
  if (!!token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

type TimelineTypes = keyof typeof endpointConfig;

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const getTimeline = (type: TimelineTypes) => {
  const endpoint = "/api/timeline" + endpointConfig[type];

  const headers = getHeaders();

  return axios.get(endpoint, { headers }).then((x) => x.data);
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
        console.error(x);
        if (x.response.status === 401) {
          logout();
          setStatus("failed");
        }
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
