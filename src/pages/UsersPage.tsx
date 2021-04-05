import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Col } from "react-bootstrap";
import { getAuthState } from "@/modules/AuthModule";
import { Block, Button } from "@/components";

export const UsersPage = () => {
  const authState = useSelector(getAuthState);
  const [data, setData] = React.useState(undefined);
  React.useEffect(() => {
    axios.get("/api/users").then((x) => setData(x.data));
  }, []);

  return (
    <>
      <Col>
        <Block style={{ padding: "6px 16px 0" }}>
          {!!data &&
            data.map((x) => (
              <p
                key={x.id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>@{x.username}</span>
                {authState.status === "success" && x.subscribed && (
                  <Button
                    onClick={() => {
                      axios
                        .post(`/api/unfollow?userId=${x.id}`)
                        .then(() => location.reload());
                    }}
                    style={{ backgroundColor: "#ff000033", color: "red" }}
                  >
                    Отписаться
                  </Button>
                )}
                {authState.status === "success" &&
                  !x.subscribed &&
                  x.id != authState.userData?.id && (
                    <Button
                      onClick={() => {
                        axios
                          .post(`/api/follow?userId=${x.id}`)
                          .then(() => location.reload());
                      }}
                    >
                      Подписаться
                    </Button>
                  )}
              </p>
            ))}
        </Block>
      </Col>
      <Col xs={3} />
    </>
  );
};
