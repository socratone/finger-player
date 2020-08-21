import React from 'react';

import SettingsItem from './settingsItem';

const Settings = (props) => {
  const { soundQuality, setSoundQuality } = props;

  return (
    <main>
      <section className="section-padding">
        <ul>
          <SettingsItem
            name="sound-quality"
            value="high"
            title="고음질"
            option={soundQuality}
            setOption={setSoundQuality}
          />
          <SettingsItem
            name="sound-quality"
            value="low"
            title="저음질"
            option={soundQuality}
            setOption={setSoundQuality}
          />
        </ul>
      </section>
    </main>
  );
};

export default Settings;
