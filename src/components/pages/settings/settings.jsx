import React from 'react';

const Settings = () => {
  return (
    <main>
      <section className="section-padding">
        <ul>
          <li>
            <input
              class="radio-button"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label class="form-check-label" for="exampleRadios1">
              {' '}
              고음질
            </label>
          </li>
          <li>
            <input
              class="radio-button"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios1">
              {' '}
              저음질
            </label>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Settings;
