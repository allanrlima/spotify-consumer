import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { Normalize } from "@smooth-ui/core-sc";
import Home from "./containers/Home";
import Tracks from "./containers/Tracks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Normalize />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/tracks" component={Tracks} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
