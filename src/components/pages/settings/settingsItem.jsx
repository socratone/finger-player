import React from 'react';

import './settingsItem.scss';

const SettingsItem = (props) => {
  const { name, value, title, option, setOption } = props;

  const handleChange = (e) => {
    const option = e.target.value;
    setOption(option);
  };

  return (
    <li className="settings-item">
      <input
        className="radio-button"
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
        checked={option === value ? true : false}
      />
      <label>{title}</label>
    </li>
  );
};

export default SettingsItem;
