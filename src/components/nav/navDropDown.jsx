import React from 'react';

import NavLink from './navLink';
import './navDropDown.scss';

const NavDropDown = () => {
  return (
    <li>
      <div id="drop-down">
        <i className="fa fa-bars" />
        <ul>
          <NavLink route="/">
            <i className="fa fa-home" />
          </NavLink>
          <NavLink route="/1" key="1">
            1
          </NavLink>
          <NavLink route="/100" key="100">
            100
          </NavLink>
          <NavLink route="/200" key="200">
            200
          </NavLink>
          <NavLink route="/300" key="300">
            300
          </NavLink>
          <NavLink route="/400" key="400">
            400
          </NavLink>
          <NavLink route="/500" key="500">
            500
          </NavLink>
        </ul>
      </div>
    </li>
  );
};

export default NavDropDown;
