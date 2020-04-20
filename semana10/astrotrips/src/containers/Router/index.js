import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";




const routes = {
  root: "/"
  // ROTAS QUE QUERO:
  // home: "/",
  // applicationForm: "/application_form",
  // login: "/login",
  // tripCreate: "/trip/create",
  // tripDetails: "/trips/details",

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} />
        
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
