import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Player from './components/player';
import Search from './components/search';
import Chants from './components/chants';
import Nav from './components/nav';
import chants from './lib/chants';

export default function App() {
  const [searchedChants, setSearchedChants] = useState([]);
  const [homeChantLists, setHomeChantLists] = useState({
    intro: [],
    offering: [],
    eucharist: [],
    dispatch: [],
    etc: [],
  });

  useEffect(() => {
    const lists = JSON.parse(localStorage.getItem('home-chant-lists'));
    if (lists) {
      setHomeChantLists(lists);
    }
  }, []);

  useEffect(() => {
    const lists = JSON.stringify(homeChantLists);
    localStorage.setItem('home-chant-lists', lists);
  }, [homeChantLists]);

  const removeHomeLists = () => {
    setHomeChantLists({
      intro: [],
      offering: [],
      eucharist: [],
      dispatch: [],
      etc: [],
    });
  };

  const updateHomeChantLists = (listName, chant, remove) => {
    const chantLists = { ...homeChantLists };
    let index;
    for (let i = 0; i < chantLists[listName].length; i++) {
      if (chantLists[listName][i].id === chant.id) {
        index = i;
        break;
      }
    }
    console.log('index : ', index);
    if (remove) {
      if (index === undefined)
        return console.log('삭제하려는 chant가 없습니다.');
      chantLists[listName].splice(index, 1);
    } else {
      if (index >= 0) return console.log('이미 있는 chant입니다.');
      chantLists[listName].push(chant);
    }
    setHomeChantLists(chantLists);
  };

  return (
    <Router>
      <div id="wrapper">
        <nav>
          <Nav Link={Link} setSearchedChants={setSearchedChants} />
        </nav>

        <Switch>
          <Route
            path="/player"
            render={(props) => <Player chants={chants} {...props} />}
          />
          <Route
            path="/100"
            render={(props) => (
              <Chants
                chants={chants}
                updateHomeChantLists={updateHomeChantLists}
                range={[100, 199]}
                {...props}
              />
            )}
          />
          <Route
            path="/200"
            render={(props) => (
              <Chants
                chants={chants}
                updateHomeChantLists={updateHomeChantLists}
                range={[200, 299]}
                {...props}
              />
            )}
          />
          <Route
            path="/300"
            render={(props) => (
              <Chants
                chants={chants}
                updateHomeChantLists={updateHomeChantLists}
                range={[300, 399]}
                {...props}
              />
            )}
          />
          <Route
            path="/400"
            render={(props) => (
              <Chants
                chants={chants}
                updateHomeChantLists={updateHomeChantLists}
                range={[400, 499]}
                {...props}
              />
            )}
          />
          <Route
            path="/500"
            render={(props) => (
              <Chants
                chants={chants}
                updateHomeChantLists={updateHomeChantLists}
                range={[500, 599]}
                {...props}
              />
            )}
          />
          <Route
            path="/1"
            render={(props) => (
              <Chants
                chants={chants}
                updateHomeChantLists={updateHomeChantLists}
                range={[1, 99]}
                {...props}
              />
            )}
          />
          <Route
            path="/search"
            render={(props) => (
              <Search
                chants={searchedChants}
                updateHomeChantLists={updateHomeChantLists}
                {...props}
              />
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <Home
                homeChantLists={homeChantLists}
                updateHomeChantLists={updateHomeChantLists}
                removeHomeLists={removeHomeLists}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}
