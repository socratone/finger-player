import React, { useState } from 'react';
import chants from '../lib/chants';
import '../styles/nav.scss';

const bigSearchButton = React.createRef();
const smallSearchButton = React.createRef();

const SEARCH_INPUT_VALUE = '번호나 제목을 입력하세요.';

const Nav = (props) => {
  const { Link, setSearchedChants } = props;
  const [onSearchButton, setSearchButton] = useState(false);
  const [querry, setQuerry] = useState(SEARCH_INPUT_VALUE);

  const setHidden = () => {
    if (onSearchButton === true) {
      return 'hidden';
    }
    return '';
  };

  const setVisible = () => {
    if (onSearchButton === false) {
      return 'hidden';
    }
    return '';
  };

  const clickXButton = () => {
    setQuerry(SEARCH_INPUT_VALUE);
    setSearchButton(false);
  };

  const clickSearchInput = () => {
    if (querry === SEARCH_INPUT_VALUE) {
      setQuerry('');
    }
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
    if (onSearchButton === true) {
      // input이 비어 있을 때만 원래대로 돌아간다.
      if (querry === '' || querry === SEARCH_INPUT_VALUE) {
        setQuerry(SEARCH_INPUT_VALUE);
        setSearchButton(false);
      } else {
        searchChants(querry);
      }
    } else {
      setSearchButton(true);
    }
  };

  const handleReturnKeyUp = (e) => {
    if (e.keyCode === 13) {
      bigSearchButton.current.click();
    }
  };

  const clickSmallSearchButton = () => {
    searchChants(querry);
  };

  const handleSmallReturnKeyUp = (e) => {
    if (e.keyCode === 13) {
      smallSearchButton.current.click();
    }
  };

  return (
    <>
      <ul id="nav-big">
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
        <li className={setHidden()}>
          <Link to="/400">500</Link>
        </li>
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
        <li>
          <Link to="/search" onClick={clickSearchButton} ref={bigSearchButton}>
            <i className="fa fa-search" />
          </Link>
        </li>
      </ul>

      <ul id="nav-small">
        <li>
          <Link to="/">
            <i className="fa fa-home" />
          </Link>
        </li>
        <li className="search-input">
          <input
            type="text"
            value={querry}
            onChange={(e) => setQuerry(e.target.value)}
            onClick={clickSearchInput}
            onKeyUp={handleSmallReturnKeyUp}
          />
        </li>
        <li>
          <Link
            to="/search"
            onClick={clickSmallSearchButton}
            ref={smallSearchButton}
          >
            <i className="fa fa-search" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
