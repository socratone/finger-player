import React, { useState } from "react";
import Modal from "react-modal";

const ChantSub = (props) => {
  const { chant, setHidden, handleClickEllipsis } = props;
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
        contentLabel="Chant Select Modal"
        ariaHideApp={false} // 오류 수정을 위해 추가
      >
        <section className="modal-section">
          <p onClick={closeModal}>
            <i className="fa fa-times" />
          </p>
          <p>
            {chant.id}번 {chant.title}
            <br />
            어디에 추가하시겠습니까?
          </p>
          <button>입당성가</button>
          <button>봉헌성가</button>
          <button>성체성가</button>
          <button>파견성가</button>
          <button>기타</button>
        </section>
      </Modal>
    </li>
  );
};

export default ChantSub;
