import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SplashContainer from './container/SplashContainer';
import ShowContainer from './container/ShowContainer';
import RankingContainer from './container/RankingContainer';
import ResultContainer from './container/ResultContainer';

class App extends Component {

  render() {
    return (
      <div className="app-root">
        <span className="background-circle"></span>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={SplashContainer} exact/>
            <Route path="/show" component={ShowContainer} exact/>
            <Route path="/ranking" component={RankingContainer} exact/>
            <Route path="/result" component={ResultContainer} exact/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
