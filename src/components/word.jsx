import React, { memo } from "react";

const Word = (props) => {
  const { word } = props;
  return <span className="lyrics-word">{word}</span>;
};

export default memo(Word);
