import React, { Component } from "react";
import { Provider, observer } from "mobx-react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";
import { Normalize } from "@smooth-ui/core-sc";
import Home from "./containers/Home";
import Tracks from "./containers/Tracks";
import Recommendations from "./containers/Recommendations";
import favoriteTracksStore from "./stores/favoriteTracksStore";

const stores = {
  favoriteTracksStore
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("spotify-token");
  return (
    <Route
      {...rest}
      render={props => (token ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div>
          <Normalize />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute exact path="/tracks" component={Tracks} />
              <PrivateRoute
                exact
                path="/recommendations"
                component={Recommendations}
              />
              <Route component={Home} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default observer(App);
