import React from 'react';

import './search.scss';

const Search = (props) => {
  const { value, onChange, onClick, onKeyUp, children } = props;
  return (
    <li className="search nav__search">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onClick={onClick}
        onKeyUp={onKeyUp}
      />
      {children}
    </li>
  );
};

export default Search;
