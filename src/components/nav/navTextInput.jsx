import React from 'react';

const NavTextInput = (props) => {
  const { value, onChange, onClick, onKeyUp, children } = props;
  return (
    <li className="search-input">
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

export default NavTextInput;
