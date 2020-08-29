import React, { useState } from 'react';

import NavLink from './navLink';
import Search from './search';
import DropDown from './dropDown';
import chantsData from '../../lib/chantsData';
import './nav.scss';

const bigSearchButton = React.createRef();
const smallSearchButton = React.createRef();

const SEARCH_INPUT_VALUE = '번호나 제목을 입력하세요.';

const Nav = (props) => {
  const { setSearchedChants } = props;
  const [isSearchButtonOn, setIsSearchButtonOn] = useState(false);
  const [querry, setQuerry] = useState(SEARCH_INPUT_VALUE);

  const clickXButton = () => {
    setQuerry(SEARCH_INPUT_VALUE);
    setIsSearchButtonOn(false);
  };

  const clickSearchInput = () => {
    if (querry === SEARCH_INPUT_VALUE) setQuerry('');
  };

  const searchChants = (querry) => {
    // 숫자인 경우
    if (Number(querry)) {
      console.log('숫자로 들어옴');
      for (let i = 0; i < chantsData.length; i++) {
        if (Number(querry) === chantsData[i].id) {
          return setSearchedChants([chantsData[i]]);
        }
      }
      // 문자인 경우
    } else {
      const results = [];
      for (let i = 0; i < chantsData.length; i++) {
        if (chantsData[i].title.indexOf(querry) !== -1) {
          results.push(chantsData[i]);
        }
      }
      if (results.length >= 1) return setSearchedChants(results);
    }
    setSearchedChants(null); // 없을 경우
  };

  const clickSearchButton = () => {
    if (isSearchButtonOn) {
      // input이 비어 있을 때만 원래대로 돌아간다.
      if (querry === '' || querry === SEARCH_INPUT_VALUE) {
        setQuerry(SEARCH_INPUT_VALUE);
        setIsSearchButtonOn(false);
      } else {
        searchChants(querry);
      }
    } else {
      setIsSearchButtonOn(true);
    }
  };

  const handleReturnKeyUp = (e) => {
    if (e.keyCode === 13) bigSearchButton.current.click();
  };

  const clickSmallSearchButton = () => {
    searchChants(querry);
  };

  return (
    <nav>
      <ul id="nav-big">
        <NavLink route="/">
          <i className="fa fa-home" />
        </NavLink>
        {!isSearchButtonOn && [
          <NavLink route="/1" key="1">
            1
          </NavLink>,
          <NavLink route="/100" key="100">
            100
          </NavLink>,
          <NavLink route="/200" key="200">
            200
          </NavLink>,
          <NavLink route="/300" key="300">
            300
          </NavLink>,
          <NavLink route="/400" key="400">
            400
          </NavLink>,
          <NavLink route="/500" key="500">
            500
          </NavLink>,
        ]}
        {isSearchButtonOn && (
          <Search
            value={querry}
            onChange={(e) => setQuerry(e.target.value)}
            onClick={clickSearchInput}
            onKeyUp={handleReturnKeyUp}
          >
            <p onClick={clickXButton}>
              <i className="fa fa-times" />
            </p>
          </Search>
        )}
        <NavLink
          route="/search"
          onClick={clickSearchButton}
          reference={bigSearchButton}
        >
          <i className="fa fa-search" />
        </NavLink>
      </ul>

      <ul id="nav-small">
        <DropDown />
        <Search
          value={querry}
          onChange={(e) => setQuerry(e.target.value)}
          onClick={clickSearchInput}
          onKeyUp={handleReturnKeyUp}
        />
        <NavLink
          route="/search"
          onClick={clickSmallSearchButton}
          reference={smallSearchButton}
        >
          <i className="fa fa-search" />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
