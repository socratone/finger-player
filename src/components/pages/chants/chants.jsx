import React from 'react';

import ChantList from '../common/chantList';

const Chants = (props) => {
  const { chants: allChants, updateHomeChantLists, history } = props;
  const [startNum, endNum] = props.range;

  let chants = [];
  for (let i = 0; i < allChants.length; i++) {
    if (allChants[i].id > endNum) {
      break;
    } else if (allChants[i].id >= startNum) {
      chants.push(allChants[i]);
    }
  }

  return (
    <main>
      <ul className="chant-ul">
        {chants.map((chant) => (
          <ChantList
            chant={chant}
            key={chant.id}
            updateHomeChantLists={updateHomeChantLists}
            history={history}
          />
        ))}
      </ul>
    </main>
  );
};

export default Chants;
