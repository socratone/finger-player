import React, { useState } from "react";
import ChantHidden from "./chantHidden";

const Chant = (props) => {
  const { chant } = props;
  const [onEllipsis, setEllipsis] = useState(false);

  const handleClickTitle = (id) => {};

  const handleClickEllipsis = () => {
    if (onEllipsis === false) {
      setEllipsis(true);
    } else {
      setEllipsis(false);
    }
  };

  const getEllipsisState = () => {
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
      <ChantHidden
        getEllipsisState={getEllipsisState}
        handleClickEllipsis={handleClickEllipsis}
      />
    </>
  );
};

export default Chant;
