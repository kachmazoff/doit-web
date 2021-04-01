import React from "react";
import { getUserParticipations } from "@/api";

export const OwnParticipationsPage = () => {
  const [participations, setParticipations] = React.useState([]);
  React.useEffect(() => {
    getUserParticipations("kachmazoff").then(setParticipations);
  }, []);
  return (
    <div>
      {participations.map((x) => (
        <p>{x.challenge.title}</p>
      ))}
    </div>
  );
};
