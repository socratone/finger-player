import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  const { route, hidden, children, onClick, reference } = props;
  return (
    <li className={hidden}>
      <Link to={route} onClick={onClick} ref={reference}>
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
