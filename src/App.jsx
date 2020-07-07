import React from "react";
import Home from "./components/home";
import Search from "./components/search";
import Chants from "./components/chants";
import chants from "./lib/chants";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <div id="wrapper">
        <nav>
          <ul id="nav-ul">
            <li>
              <Link to="/">
                <i className="fa fa-home" />
              </Link>
            </li>
            <li>
              <Link to="/1">1</Link>
            </li>
            <li>
              <Link to="/100">100</Link>
            </li>
            <li>
              <Link to="/200">200</Link>
            </li>
            <li>
              <Link to="/300">300</Link>
            </li>
            <li>
              <Link to="/400">400</Link>
            </li>
            <li>
              <Link to="/search">
                <i className="fa fa-search" />
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/100">
            <Chants chants={chants} range={[100, 199]} />
          </Route>
          <Route path="/200">
            <Chants chants={chants} range={[200, 299]} />
          </Route>
          <Route path="/300">
            <Chants chants={chants} range={[300, 399]} />
          </Route>
          <Route path="/400">
            <Chants chants={chants} range={[400, 499]} />
          </Route>
          <Route path="/1">
            <Chants chants={chants} range={[1, 99]} />
          </Route>
          <Route path="/search">
            <Search chants={chants} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
