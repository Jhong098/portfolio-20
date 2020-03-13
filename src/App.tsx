import React from "react";

import Logo from "Components/Logo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Landing from "Pages/Landing";
import Links from "Components/Links";
import Experiences from "Pages/Experiences";
import ExperienceDetails from "Pages/Experiences/ExperienceDetails";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <canvas id="cursor" style={{ height: "100%", width: "100%" }} /> */}
      <Links />
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/experience">
            <Experiences />
          </Route>
          <Route path="/experience/:number">
            <ExperienceDetails />
          </Route>
        </Switch>
        <Logo />
      </Router>
    </div>
  );
};

export default App;
