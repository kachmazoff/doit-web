import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ChallengePage } from "./ChallengePage";
import { ChallengesListPage } from "./ChallengesListPage";
import { CreateChallengePage } from "./CreateChallengePage";
import { CreateNotePage } from "./CreateNotePage";
import { ExplorePage } from "./ExplorePage";
import { HomePage } from "./HomePage";
import { NotFoundPage } from "./NotFoundPage";
import { OwnParticipationsPage } from "./OwnParticipationsPage";
import { ParticipantPage } from "./ParticipantPage";
import { RegistrationPage } from "./RegistrationPage";
import { UsersPage } from "./UsersPage";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/registration" exact component={RegistrationPage} />
      <Route path="/challenge_create" exact component={CreateChallengePage} />
      <Route path="/challenge/:id" component={ChallengePage} />
      <Route path="/challenges" component={ChallengesListPage} />
      <Route path="/note_create" exact component={CreateNotePage} />
      <Route path="/participations" exact component={OwnParticipationsPage} />
      <Route path="/participant/:id" exact component={ParticipantPage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/explore" component={ExplorePage} />
      <Route path="/feed" component={HomePage} />
      <Route path="/" exact>
        <Redirect to="/feed" />
      </Route>
      <Route path="*" exact component={NotFoundPage} />
    </Switch>
  );
};
