import React, { Component } from "react";
import { Provider, observer } from "mobx-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { Normalize } from "@smooth-ui/core-sc";
import Home from "./containers/Home";
import Tracks from "./containers/Tracks";
import Recomendations from "./containers/Recomendations";
import FavoriteTracksStore from "./stores/favoriteTracksStore";

const stores = {
  FavoriteTracksStore
};

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="App">
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
