import React from 'react';
import { Link } from 'react-router-dom';

import './dropDown.scss';

const DropDown = () => {
  return (
    <li>
      <div id="drop-down">
        <i className="fa fa-bars" />
        <ul>
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
            <Link to="/500">500</Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default DropDown;
