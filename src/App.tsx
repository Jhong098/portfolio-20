import React from "react";

import Logo from "Components/Logo";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // useLocation
} from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

import "./App.scss";

import Landing from "Pages/Landing";
import Travel from "Pages/Travel";
import Art from "Pages/Art";

import Links from "Components/Links";
import Background from "Components/Background";

import "normalize.css";

const App = () => {
  // const location = useLocation();
  return (
    <div className="App">
      <Background />
      {/* <canvas id="cursor" style={{ height: "100%", width: "100%" }} /> */}
      <Links />
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/travel">
            <Travel />
          </Route>
          <Route exact path="/art">
            <Art />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
