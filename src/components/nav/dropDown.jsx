import React from 'react';

import NavLink from './navLink';
import './dropDown.scss';

const DropDown = () => {
  return (
    <li>
      <div id="drop-down">
        <i className="fa fa-bars" />
        <ul>
          <NavLink route="/">
            <i className="fa fa-home" />
          </NavLink>
          <NavLink route="/1">1</NavLink>
          <NavLink route="/100">100</NavLink>
          <NavLink route="/200">200</NavLink>
          <NavLink route="/300">300</NavLink>
          <NavLink route="/400">400</NavLink>
          <NavLink route="/500">500</NavLink>
        </ul>
      </div>
    </li>
  );
};

export default DropDown;
