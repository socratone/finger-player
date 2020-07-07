import React from "react";
import Chant from "./chant";

const Search = (props) => {
  const { chants } = props;
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

export default Search;
