import React from 'react';
import Modal from 'react-modal';

import './modal.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ChantListModal = (props) => {
  const { modalIsOpen, closeModal, chant, updateHomeChantLists } = props;

  return (
    <Modal
      isOpen={modalIsOpen}
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
        <button
          onClick={() => {
            updateHomeChantLists('intro', chant);
            closeModal();
          }}
          className="normal-button"
        >
          입당성가
        </button>
        <button
          onClick={() => {
            updateHomeChantLists('offering', chant);
            closeModal();
          }}
          className="normal-button"
        >
          봉헌성가
        </button>
        <button
          onClick={() => {
            updateHomeChantLists('eucharist', chant);
            closeModal();
          }}
          className="normal-button"
        >
          성체성가
        </button>
        <button
          onClick={() => {
            updateHomeChantLists('dispatch', chant);
            closeModal();
          }}
          className="normal-button"
        >
          파견성가
        </button>
        <button
          onClick={() => {
            updateHomeChantLists('etc', chant);
            closeModal();
          }}
          className="normal-button"
        >
          기타
        </button>
      </section>
    </Modal>
  );
};

export default ChantListModal;
