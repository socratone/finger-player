import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Player from "./components/player";
import Search from "./components/search";
import Chants from "./components/chants";
import chants from "./lib/chants";
import "./App.scss";

const SEARCH_INPUT_VALUE = "번호나 제목을 입력하세요.";

export default function App() {
  const [onSearchButton, setSearchButton] = useState(false);
  const [searchedChants, setSearchedChants] = useState([]);
  const [querry, setQuerry] = useState(SEARCH_INPUT_VALUE);

  const clickXButton = () => {
    setQuerry(SEARCH_INPUT_VALUE);
    setSearchButton(false);
  };

  const clickSearchInputFirst = () => {
    if (querry === SEARCH_INPUT_VALUE) {
      setQuerry("");
    }
  };

  const searchChants = (querry) => {
    // 숫자인 경우
    if (Number(querry)) {
      console.log("숫자로 들어옴");
      for (let i = 0; i < chants.length; i++) {
        if (Number(querry) === chants[i].id) {
          setSearchedChants([chants[i]]);
          break;
        }
      }
      // 문자인 경우
    } else {
      const results = [];
      for (let i = 0; i < chants.length; i++) {
        if (chants[i].title.indexOf(querry) !== -1) {
          results.push(chants[i]);
        }
      }
      setSearchedChants(results);
    }
  };

  const clickSearchButton = () => {
    if (onSearchButton === true) {
      // input이 비어 있을 때만 원래대로 돌아간다.
      if (querry === "" || querry === SEARCH_INPUT_VALUE) {
        setQuerry(SEARCH_INPUT_VALUE);
        setSearchButton(false);
      } else {
        console.log("검색 요청");
        searchChants(querry);
      }
    } else {
      setSearchButton(true);
    }
  };

  const setHidden = () => {
    if (onSearchButton === true) {
      return "hidden";
    }
    return "";
  };

  const setVisible = () => {
    if (onSearchButton === false) {
      return "hidden";
    }
    return "";
  };

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
            <li className={setHidden()}>
              <Link to="/1">1</Link>
            </li>
            <li className={setHidden()}>
              <Link to="/100">100</Link>
            </li>
            <li className={setHidden()}>
              <Link to="/200">200</Link>
            </li>
            <li className={setHidden()}>
              <Link to="/300">300</Link>
            </li>
            <li className={setHidden()}>
              <Link to="/400">400</Link>
            </li>
            <li className={"search-input " + setVisible()}>
              <input
                type="text"
                value={querry}
                onChange={(e) => setQuerry(e.target.value)}
                onClick={clickSearchInputFirst}
              />
              <p className={setVisible()} onClick={clickXButton}>
                <i className="fa fa-times" />
              </p>
            </li>
            <li>
              <Link to="/search" onClick={clickSearchButton}>
                <i className="fa fa-search" />
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route
            path="/player"
            render={(props) => <Player chants={chants} {...props} />}
          />
          <Route
            path="/100"
            render={(props) => (
              <Chants chants={chants} range={[100, 199]} {...props} />
            )}
          />
          <Route
            path="/200"
            render={(props) => (
              <Chants chants={chants} range={[200, 299]} {...props} />
            )}
          />
          <Route
            path="/300"
            render={(props) => (
              <Chants chants={chants} range={[300, 399]} {...props} />
            )}
          />
          <Route
            path="/400"
            render={(props) => (
              <Chants chants={chants} range={[400, 499]} {...props} />
            )}
          />
          <Route
            path="/1"
            render={(props) => (
              <Chants chants={chants} range={[1, 99]} {...props} />
            )}
          />
          <Route
            path="/search"
            render={(props) => <Search chants={searchedChants} {...props} />}
          />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
