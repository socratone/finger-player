import React, { useState } from "react";
import ChantSub from "./chantSub";

const Chant = (props) => {
  const { chant, updateHomeChantLists, history } = props;
  const [onEllipsis, setEllipsis] = useState(false);

  const handleClickTitle = (id) => {
    history.push(`/player/${id}`);
  };

  const handleClickEllipsis = () => {
    if (onEllipsis === false) {
      setEllipsis(true);
    } else {
      setEllipsis(false);
    }
  };

  const setHidden = () => {
    if (onEllipsis === false) {
      return "hidden";
    }
    return "";
  };

  return (
    <>
      <li>
        <p className="chant-index">{chant.id}</p>
        <p className="chant-title" onClick={() => handleClickTitle(chant.id)}>
          {chant.title}
        </p>
        <p className="chant-ellipsis" onClick={handleClickEllipsis}>
          <i className="fa fa-ellipsis-v" />
        </p>
      </li>
      <ChantSub
        chant={chant}
        updateHomeChantLists={updateHomeChantLists}
        setHidden={setHidden}
        handleClickEllipsis={handleClickEllipsis}
      />
    </>
  );
};

export default Chant;
