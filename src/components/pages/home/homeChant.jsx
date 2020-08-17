import React, { useState } from 'react';
import HomeChantSub from './homeChantSub';

const HomeChant = (props) => {
  const { chant, updateHomeChantLists, homeChantListName, history } = props;
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
      return 'hidden';
    }
    return '';
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
      <HomeChantSub
        chant={chant}
        updateHomeChantLists={updateHomeChantLists}
        homeChantListName={homeChantListName}
        setHidden={setHidden}
        handleClickEllipsis={handleClickEllipsis}
      />
    </>
  );
};

export default HomeChant;
