import React, { useState } from 'react';

import ChantListSub from './chantListSub';

const ChantList = (props) => {
  const { chant, updateHomeChantLists, history } = props;
  const [onEllipsis, setEllipsis] = useState(false);
  const chantSub = React.createRef();

  const handleClickTitle = (id) => {
    history.push(`/player/${id}`);
  };

  const handleClickEllipsis = () => {
    if (onEllipsis === false) {
      setEllipsis(true);
    } else {
      chantSub.current.classList.remove('chant-sub-animation');
      setTimeout(() => {
        setEllipsis(false);
      }, 400);
    }
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
      {onEllipsis && (
        <ChantListSub
          chant={chant}
          updateHomeChantLists={updateHomeChantLists}
          handleClickEllipsis={handleClickEllipsis}
          chantSub={chantSub}
        />
      )}
    </>
  );
};

export default ChantList;
