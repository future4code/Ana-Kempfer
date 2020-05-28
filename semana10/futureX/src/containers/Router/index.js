import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ListTripPage from "../ListTripPage";
import TripDetailsPage from "../TripDetailsPage";
import HomePage from "../HomePage";
import ApplicationPage from "../ApplicationPage";
import CreateTripPage from "../CreateTripPage";
import AdmPanel from "../AdmPanel";


export const routes = {
  root: "/",
  application: "/application-form",
  login: "/login",
  createTrip: "/trips/create",
  allTrips: "/trips/list",
  tripDetails: "/trips/details",
  admPanel: "/adm/panel"
};



function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage}/>
        <Route exact path={routes.application} component={ApplicationPage}/>
        <Route exact path={routes.login} component={LoginPage}/>
        <Route exact path={routes.createTrip} component={CreateTripPage}/>
        <Route exact path={routes.allTrips} component={ListTripPage}/>
        <Route exact path={routes.tripDetails} component={TripDetailsPage}/>
        <Route exact path={routes.admPanel} component={AdmPanel}/>
      </Switch>
    </ConnectedRouter>
  );
}



export default Router;
