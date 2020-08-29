import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const { route, onClick, reference, children } = props;
  return (
    <li>
      <Link to={route} onClick={onClick} ref={reference}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
