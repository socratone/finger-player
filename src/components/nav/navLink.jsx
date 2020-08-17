import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  const { route, onClick, reference, children } = props;
  return (
    <li>
      <Link to={route} onClick={onClick} ref={reference}>
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
