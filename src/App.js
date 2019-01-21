import React, { Component } from "react";
import { Provider, observer } from "mobx-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { Normalize } from "@smooth-ui/core-sc";
import Home from "./containers/Home";
import Tracks from "./containers/Tracks";
import Recomendations from "./containers/Recomendations";
import favoriteTracksStore from "./stores/favoriteTracksStore";

const stores = {
  favoriteTracksStore
};

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div>
          <Normalize />
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/tracks" component={Tracks} />
              <Route exact path="/recomendations" component={Recomendations} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default observer(App);
