import React, { useState } from "react";
import Modal from "react-modal";

const ChantSub = (props) => {
  const { setHidden, handleClickEllipsis } = props;
  const [modalIsOpen, setModalOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const afterOpenModal = () => {};

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
    <li className={"chant-sub " + setHidden()}>
      <p>
        <span>홈 화면에 추가 하시겠습니까?</span>
        <span className="chant-v" onClick={handleClickV}>
          <i className="fa fa-check" />
        </span>
        <span className="chant-x" onClick={handleClickX}>
          <i className="fa fa-times" />
        </span>
      </p>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        // contentLabel="Chant Select Modal"
      >
        {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={closeModal}>close</button>
        <div>어디에 추가하시겠습니까?</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </li>
  );
};

export default ChantSub;
