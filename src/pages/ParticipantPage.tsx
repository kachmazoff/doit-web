import React from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import { TimelineModule } from "@/modules";
import { ChallengeCard } from "@/components/ChallengeCard";
import { StatusMessage } from "@/components";

export const ParticipantPage = ({ match }) => {
  const {
    params: { id },
  } = match;
  const [data, setData] = React.useState(undefined);
  React.useEffect(() => {
    axios.get(`/api/participants/${id}`).then((x) => setData(x.data));
  }, [id]);

  return (
    <>
      <Col>
        {data && (
          <ChallengeCard
            model={data.challenge}
            type="Дневник"
            created={data.created}
          />
        )}
        {!data && <StatusMessage status="loading" />}
        {data && <TimelineModule participantId={id} />}
      </Col>
      <Col xs={3} />
    </>
  );
};
