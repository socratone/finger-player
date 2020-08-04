import React, { memo } from 'react';

const Word = (props) => {
  const { word, wordIndex, currentWordIndex } = props;
  if (wordIndex !== undefined && wordIndex === currentWordIndex - 1) {
    return <span style={{ color: 'red', fontWeight: '900' }}>{word}</span>;
  } else {
    return <span>{word}</span>;
  }
};

export default memo(Word);
