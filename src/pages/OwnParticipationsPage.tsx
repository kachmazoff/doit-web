import React from "react";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { getUserParticipations } from "@/api";
import { Block, ParticipationsList } from "@/components";
import { getAuthState } from "@/modules/AuthModule";

export const OwnParticipationsPage = () => {
  const authState = useSelector(getAuthState);
  const [participations, setParticipations] = React.useState([]);
  React.useEffect(() => {
    const { userData } = authState;
    if (!!userData && userData.username)
      getUserParticipations(userData.username).then((list) => {
        setParticipations(list);
      });
  }, [authState.userData]);
  return (
    <>
      <Col>
        <Block transparent>
          <h2>Дневники</h2>
        </Block>
        <ParticipationsList items={participations} />
      </Col>
      <Col xs={3}></Col>
    </>
  );
};
