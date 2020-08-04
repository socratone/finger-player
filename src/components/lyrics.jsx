import React, { useEffect, memo } from 'react';
import Word from './word';

const PLAYED_WORD_COLOR = 'green';

const Lyrics = (props) => {
  const { lyricsNumber, currentLyricsIndex, lyrics, wordIndex } = props;
  const words = lyrics.split('');

  const wordParent = React.createRef();

  // 연주되는 가사가 녹색으로 바뀐다.
  useEffect(() => {
    const spans = wordParent.current.children;
    if (lyricsNumber === currentLyricsIndex && spans[wordIndex]) {
      spans[wordIndex].style.color = PLAYED_WORD_COLOR;
      spans[wordIndex].style.fontWeight = '900';
    }
  }, [wordIndex, lyricsNumber, currentLyricsIndex, wordParent]);

  // 절이 바뀌면 글자가 초기화 된다.
  useEffect(() => {
    const spans = wordParent.current.children;
    if (lyricsNumber !== currentLyricsIndex) {
      for (let i = 0; i < spans.length; i++) {
        spans[i].style.color = 'unset';
        spans[i].style.fontWeight = 'unset';
      }
    }
  }, [currentLyricsIndex]);

  if (lyricsNumber === 1) {
    let index = -1;
    return (
      <p ref={wordParent}>
        {lyricsNumber}.{' '}
        {words.map((word, i) => {
          if (word === '.' || word === ',' || word === ' ') {
            return <React.Fragment key={i}>{word}</React.Fragment>;
          } else {
            index++;
            return <Word key={i} word={word} index={index} />;
          }
        })}
      </p>
    );
  }
  return (
    <p ref={wordParent}>
      {lyricsNumber}.{' '}
      {words.map((word, i) => {
        if (word === '.' || word === ',' || word === ' ') {
          return <React.Fragment key={i}>{word}</React.Fragment>;
        } else {
          return <Word key={i} word={word} />;
        }
      })}
    </p>
  );
};

export default memo(Lyrics);
