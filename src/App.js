import React from "react";
import { Helmet } from "react-helmet";
import "./styles.css";

import Header from "./components/header";
import Main from "./pages/main";
import WorldInfo from "./pages/world-info"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Tibia Worlds - A simple react app</title>
    </Helmet>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/world/:name" component={WorldInfo} />
      </Switch>
    </Router>
  </div>
);

export default App;
