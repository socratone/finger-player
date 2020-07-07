import React from "react";
import Chant from "./chant";

const Chants = (props) => {
  const { chants: allChants } = props;
  const [startNum, endNum] = props.range;

  let chants = [...allChants];
  chants = chants.splice(startNum - 1, endNum - startNum); // 번호에 맞게 자른다.

  return (
    <main>
      <ul className="chant-ul">
        {chants.map((chant) => (
          <Chant chant={chant} key={chant.id} />
        ))}
      </ul>
    </main>
  );
};

export default Chants;
