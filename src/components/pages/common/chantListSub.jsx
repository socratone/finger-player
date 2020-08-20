import React, { useState } from 'react';

import ChantListModal from './chantListModal';

const ChantListSub = (props) => {
  const { chant, updateHomeChantLists, setHidden, handleClickEllipsis } = props;
  const [modalIsOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClickV = () => {
    openModal();
    handleClickEllipsis();
  };

  const handleClickX = () => {
    handleClickEllipsis();
  };

  return (
    <li className={'chant-sub ' + setHidden()}>
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
