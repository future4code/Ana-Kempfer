import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import CreateTripPage from "../CreatetripPage";




const routes = {
  root: "/",
  createTrip: "/trip/create",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        {/* <Route path={routes.root} component={LoginPage} /> */}
        <Route path={routes.root} component={CreateTripPage}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
