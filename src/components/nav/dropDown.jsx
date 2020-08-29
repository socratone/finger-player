import React from 'react';

import NavItem from './navItem';
import './dropDown.scss';

const DropDown = () => {
  return (
    <li>
      <div className="drop-down">
        <i className="fa fa-bars" />
        <ul>
          <NavItem route="/">
            <i className="fa fa-home" />
          </NavItem>
          <NavItem route="/1" key="1">
            1
          </NavItem>
          <NavItem route="/100" key="100">
            100
          </NavItem>
          <NavItem route="/200" key="200">
            200
          </NavItem>
          <NavItem route="/300" key="300">
            300
          </NavItem>
          <NavItem route="/400" key="400">
            400
          </NavItem>
          <NavItem route="/500" key="500">
            500
          </NavItem>
        </ul>
      </div>
    </li>
  );
};

export default DropDown;
