import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import CreateTripPage from "../CreatetripPage";
import ApplicationFormPage from "../ApplicationForm";
import ListTripsPage from "../ListTripsPage";
import TripsDetailsPage from "../TripDetailsPage"



const routes = {
  root: "/",
  login: "/login",
  createTrip: "/trip/create",
  application: "/application-form",
  tripsList: "/trips/list",
  tripDetails: "/trips/details"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.login} component={LoginPage} /> 
        <Route path={routes.creatTrip} component={CreateTripPage}/>
        <Route path={routes.application} component={ApplicationFormPage}/>
        <Route path={routes.root} component={ListTripsPage}/>
        <Route path={routes.tripDetails} component={TripsDetailsPage}/>

      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
