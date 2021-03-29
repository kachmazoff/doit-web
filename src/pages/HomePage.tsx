import React from "react";
import axios, { AxiosError } from "axios";
import { Button, Col } from "react-bootstrap";
import {
  Timeline,
  FastActionsBlock,
  TimelineItemModel,
  Block,
} from "@/components";
import { LoginFormMin } from "@/forms";

const getHeaders = () => {
  const token = localStorage.getItem("token");

  const headers = {};
  if (!!token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const getTimeline = () => {
  const token = localStorage.getItem("token");
  const common = "/api/timeline";
  const personalized = "/api/timeline/personalized";
  const own = "/api/timeline/own";
  const headers = getHeaders();

  return axios
    .get(!!token ? personalized : common, { headers })
    .then((x) => x.data)
    .catch((x: AxiosError) => {
      console.log(x.response.status);
      if (x.response.status === 401) {
        logout();
        return getTimeline();
      }
    });
};

export const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [timelineItems, setTimelineItems] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);

    getTimeline()
      .then(setTimelineItems)
      .finally(() => setIsLoading(false));
  }, []);

  const isLoggedIn = localStorage.getItem("user") !== null;

  return (
    <>
      <Col>
        {isLoading ? (
          <p>Загрузка</p>
        ) : (
          <Timeline
            items={timelineItems as TimelineItemModel[]}
            keyField="index"
          />
        )}
      </Col>
      <Col xs={3}>
        {!isLoggedIn ? (
          <LoginFormMin
            onSubmit={(data) => {
              const { email, password } = data.target.elements;
              const body = { email: email.value, password: password.value };

              axios.post("/api/auth/login", body).then((x) => {
                console.log(x.data);
                localStorage.setItem("token", x.data.token);
                localStorage.setItem("user", JSON.stringify(x.data.user));
              });
            }}
          />
        ) : (
          <Block>
            <Button onClick={logout}>Выйти</Button>
          </Block>
        )}
        <FastActionsBlock />
      </Col>
    </>
  );
};
