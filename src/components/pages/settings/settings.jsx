import React from 'react';

const Settings = (props) => {
  const { soundQuality, setSoundQuality } = props;

  const handleChange = (e) => {
    const quality = e.target.value;
    setSoundQuality(quality);
  };

  return (
    <main>
      <section className="section-padding">
        <ul>
          <li>
            <input
              className="radio-button"
              type="radio"
              name="sound-quality"
              value="high"
              onChange={handleChange}
              checked={soundQuality === 'high' ? true : false}
            />
            <label> 고음질</label>
          </li>
          <li>
            <input
              className="radio-button"
              type="radio"
              name="sound-quality"
              value="low"
              onChange={handleChange}
              checked={soundQuality === 'low' ? true : false}
            />
            <label> 저음질</label>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Settings;
