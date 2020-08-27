import React, { memo } from 'react';

const Word = (props) => {
  const {
    word,
    wordNumber,
    currentWordIndex,
    lyricsNumber,
    convertWordIndex,
    isCurrentLyrics,
  } = props;

  if (
    isCurrentLyrics() &&
    wordNumber !== undefined &&
    wordNumber === currentWordIndex - 1
  ) {
    return (
      <span
        style={{ color: 'red', fontWeight: '900', transform: 'scale(1.1)' }}
        onClick={() => convertWordIndex(wordNumber, lyricsNumber)}
      >
        {word}
      </span>
    );
  } else {
    return (
      <span onClick={() => convertWordIndex(wordNumber, lyricsNumber)}>
        {word}
      </span>
    );
  }
};

export default memo(Word);
