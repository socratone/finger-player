import React from "react";

const ChantSub = (props) => {
  const { setHidden, handleClickEllipsis } = props;

  const handleClickV = () => {
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
    </li>
  );
};

export default ChantSub;
