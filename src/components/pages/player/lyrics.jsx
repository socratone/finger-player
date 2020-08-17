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
  const lyricsWords = lyrics.split('');

  const wordParent = React.createRef();

  const isCurrentLyrics = () => {
    if (lyricsNumber === currentLyricsNumber) return true;
    return false;
  };

  let words = [];
  let index = -1;
  for (let i = 0; i < lyricsWords.length; i++) {
    const word = lyricsWords[i];
    if (lyricsWords[i + 1] === '_') {
      index++;
      words.push(
        <Word
          key={i}
          word={lyricsWords[i] + lyricsWords[i + 2]}
          wordNumber={index}
          currentWordIndex={wordIndex}
          lyricsNumber={lyricsNumber}
          convertWordIndex={convertWordIndex}
          isCurrentLyrics={isCurrentLyrics}
        />
      );
      i += 2;
    } else if (word === '.' || word === ',' || word === ' ') {
      words.push(<React.Fragment key={i}>{word}</React.Fragment>);
    } else {
      index++;
      words.push(
        <Word
          key={i}
          word={word === '-' ? ' - ' : word}
          wordNumber={index}
          currentWordIndex={wordIndex}
          lyricsNumber={lyricsNumber}
          convertWordIndex={convertWordIndex}
          isCurrentLyrics={isCurrentLyrics}
        />
      );
    }
  }

  return (
    <p ref={wordParent}>
      {lyricsNumber}. {words}
    </p>
  );
};

export default memo(Lyrics);
