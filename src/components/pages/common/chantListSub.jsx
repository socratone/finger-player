import React, { useState, useEffect } from 'react';

import ChantListModal from './chantListModal';

const ChantListSub = (props) => {
  const { chant, updateHomeChantLists, handleClickEllipsis, chantSub } = props;
  const [modalIsOpen, setModalOpen] = useState(false);

  useEffect(() => {
    chantSub.current.classList.add('chant-sub-animation');
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    handleClickEllipsis();
  };

  const handleClickV = () => {
    openModal();
  };

  const handleClickX = () => {
    handleClickEllipsis();
  };

  return (
    <li className="chant-sub" ref={chantSub}>
      <p>
        <span>홈 화면에 추가 하시겠습니까?</span>
        <span className="chant-v" onClick={handleClickV}>
          <i className="fa fa-check" />
        </span>
        <span className="chant-x" onClick={handleClickX}>
          <i className="fa fa-times" />
        </span>
      </p>
      <ChantListModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        chant={chant}
        updateHomeChantLists={updateHomeChantLists}
      />
    </li>
  );
};

export default ChantListSub;
