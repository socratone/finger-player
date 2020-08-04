import React, { memo } from 'react';
import Word from './word';

const Lyrics = (props) => {
  const { lyricsNumber, currentLyricsNumber, lyrics, wordIndex } = props;
  const words = lyrics.split('');

  const wordParent = React.createRef();

  const isCurrentLyrics = lyricsNumber === currentLyricsNumber ? true : false;

  let index = -1;
  return (
    <p ref={wordParent}>
      {lyricsNumber}.{' '}
      {words.map((word, i) => {
        if (word === '.' || word === ',' || word === ' ') {
          return <React.Fragment key={i}>{word}</React.Fragment>;
        } else if (isCurrentLyrics) {
          index++;
          return (
            <Word
              key={i}
              word={word}
              wordIndex={index}
              currentWordIndex={wordIndex}
            />
          );
        } else {
          return <Word key={i} word={word} />;
        }
      })}
    </p>
  );
};

export default memo(Lyrics);
