import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ChallengePage } from "./ChallengePage";
import { CreateChallengePage } from "./CreateChallengePage";
import { CreateNotePage } from "./CreateNotePage";
import { HomePage } from "./HomePage";
import { NotFoundPage } from "./NotFoundPage";
import { OwnParticipationsPage } from "./OwnParticipationsPage";
import { RegistrationPage } from "./RegistrationPage";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/registration" exact component={RegistrationPage} />
      <Route path="/challenge_create" exact component={CreateChallengePage} />
      <Route path="/challenge/:id" exact component={ChallengePage} />
      <Route path="/note_create" exact component={CreateNotePage} />
      <Route path="/participations" exact component={OwnParticipationsPage} />
      <Route path="/feed" component={HomePage} />
      <Route path="/" exact>
        <Redirect to="/feed" />
      </Route>
      <Route path="*" exact component={NotFoundPage} />
    </Switch>
  );
};
