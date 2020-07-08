import React from "react";
// import Modal from "react-modal";

const HomeChantSub = (props) => {
  const {
    chant,
    updateHomeChantLists,
    homeChantListName,
    setHidden,
    handleClickEllipsis,
  } = props;

  const handleClickV = () => {
    updateHomeChantLists(homeChantListName, chant, "remove");
    handleClickEllipsis();
  };

  const handleClickX = () => {
    handleClickEllipsis();
  };

  return (
    <li className={"chant-sub " + setHidden()}>
      <p>
        <span>홈 화면에서 지우시겠습니까?</span>
        <span className="chant-v" onClick={handleClickV}>
          <i className="fa fa-check" />
        </span>
        <span className="chant-x" onClick={handleClickX}>
          <i className="fa fa-times" />
        </span>
      </p>
    </li>
  );
};

export default HomeChantSub;
