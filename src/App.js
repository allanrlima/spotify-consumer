import React, { Component } from "react";
import "./App.css";
import { Normalize } from "@smooth-ui/core-sc";
import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Normalize />
        <Home />
      </div>
    );
  }
}

export default App;
