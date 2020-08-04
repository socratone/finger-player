import React, { memo } from 'react';
import Word from './word';

const Lyrics = (props) => {
  const {
    lyricsNumber,
    currentLyricsNumber,
    lyrics,
    wordIndex,
    convertWordIndex,
  } = props;
  const words = lyrics.split('');

  const wordParent = React.createRef();

  const isCurrentLyrics = () => {
    if (lyricsNumber === currentLyricsNumber) return true;
    return false;
  };

  let index = -1;
  return (
    <p ref={wordParent}>
      {lyricsNumber}.{' '}
      {words.map((word, i) => {
        if (word === '.' || word === ',' || word === ' ') {
          return <React.Fragment key={i}>{word}</React.Fragment>;
        } else {
          index++;
          return (
            <Word
              key={i}
              word={word}
              wordNumber={index}
              currentWordIndex={wordIndex}
              lyricsNumber={lyricsNumber}
              convertWordIndex={convertWordIndex}
              isCurrentLyrics={isCurrentLyrics}
            />
          );
        }
      })}
    </p>
  );
};

export default memo(Lyrics);
