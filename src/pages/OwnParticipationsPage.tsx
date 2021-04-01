import React from "react";
import { Col } from "react-bootstrap";
import { getUserParticipations } from "@/api";
import { dateFormat } from "@/utils";
import { Block } from "@/components";

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
        {participations.map((x) => (
          <Block key={x.id}>
            <p>Дата начала {dateFormat(x.created)}</p>
            <p>{x.challenge.title}</p>
          </Block>
        ))}
      </Col>
      <Col xs={3}></Col>
    </>
  );
};
