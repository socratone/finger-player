import React from "react";
import Chant from "./chant";

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
          <Chant chant={chant} key={chant.id} history={history} />
        ))}
      </ul>
    </main>
  );
};

export default Chants;
