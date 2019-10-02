import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import ShowContainer from "./container/ShowContainer";
import RankingContainer from "./container/RankingContainer";

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <span className="background-circle"></span>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={() => <div />} exact />
            <Route path="/show" component={ShowContainer} exact />
            <Route path="/ranking" component={RankingContainer} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
