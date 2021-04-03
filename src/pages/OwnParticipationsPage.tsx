import React from "react";
import { Col } from "react-bootstrap";
import { getUserParticipations } from "@/api";
import { Block, ParticipationsList } from "@/components";

export const OwnParticipationsPage = () => {
  const [participations, setParticipations] = React.useState([]);
  React.useEffect(() => {
    getUserParticipations("kachmazoff").then((list) => {
      console.log(list);
      setParticipations(list);
    });
  }, []);
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
