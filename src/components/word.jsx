import React, { memo } from 'react';

const Word = (props) => {
  const { word, wordNumber, currentWordIndex } = props;
  console.log('wordNumber:', wordNumber, 'currentWordIndex:', currentWordIndex);
  if (wordNumber !== undefined && wordNumber === currentWordIndex - 1) {
    return <span style={{ color: 'red', fontWeight: '900' }}>{word}</span>;
  } else {
    return <span>{word}</span>;
  }
};

export default memo(Word);
