import React, { useState } from 'react';

import NavLink from './navLink';
import DropDown from './dropDown';
import chants from '../../lib/chants';
import './nav.scss';

const bigSearchButton = React.createRef();
const smallSearchButton = React.createRef();

const SEARCH_INPUT_VALUE = '번호나 제목을 입력하세요.';

const Nav = (props) => {
  const { setSearchedChants } = props;
  const [isSearchButtonOn, setIsSearchButtonOn] = useState(false);
  const [querry, setQuerry] = useState(SEARCH_INPUT_VALUE);

  const setVisible = () => {
    if (!isSearchButtonOn) return 'hidden';
    return '';
  };

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
      for (let i = 0; i < chants.length; i++) {
        if (Number(querry) === chants[i].id) {
          return setSearchedChants([chants[i]]);
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

  const handleSmallReturnKeyUp = (e) => {
    if (e.keyCode === 13) smallSearchButton.current.click();
  };

  return (
    <nav>
      <ul id="nav-big">
        <NavLink route="/">
          <i className="fa fa-home" />
        </NavLink>
        {!isSearchButtonOn && <NavLink route="/1">1</NavLink>}
        {!isSearchButtonOn && <NavLink route="/100">100</NavLink>}
        {!isSearchButtonOn && <NavLink route="/200">200</NavLink>}
        {!isSearchButtonOn && <NavLink route="/300">300</NavLink>}
        {!isSearchButtonOn && <NavLink route="/400">400</NavLink>}
        {!isSearchButtonOn && <NavLink route="/500">500</NavLink>}
        <li className={'search-input ' + setVisible()}>
          <input
            type="text"
            value={querry}
            onChange={(e) => setQuerry(e.target.value)}
            onClick={clickSearchInput}
            onKeyUp={handleReturnKeyUp}
          />
          <p className={setVisible()} onClick={clickXButton}>
            <i className="fa fa-times" />
          </p>
        </li>
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
        <li className="search-input">
          <input
            type="text"
            value={querry}
            onChange={(e) => setQuerry(e.target.value)}
            onClick={clickSearchInput}
            onKeyUp={handleSmallReturnKeyUp}
          />
        </li>
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
