import React, { useEffect, memo } from "react";
import Word from "./word";

const PLAYED_WORD_COLOR = "green";

const Lyrics = (props) => {
  const { verse, verseIndex, lyrics, wordIndex, setPreludeIndex } = props;
  const words = lyrics.split("");

  const wordParent = React.createRef();

  // 연주되는 가사가 녹색으로 바뀐다.
  useEffect(() => {
    const spans = wordParent.current.children;
    if (verse === String(verseIndex) && spans[wordIndex]) {
      spans[wordIndex].style.color = PLAYED_WORD_COLOR;
      spans[wordIndex].style.fontWeight = "900";
    }
  }, [wordIndex, verse, verseIndex, wordParent]);

  // 절이 바뀌면 글자가 초기화 된다.
  useEffect(() => {
    const spans = wordParent.current.children;
    if (verse !== String(verseIndex)) {
      for (let i = 0; i < spans.length; i++) {
        spans[i].style.color = "unset";
        spans[i].style.fontWeight = "unset";
      }
    }
  }, [verseIndex]);

  if (verse === "1") {
    let index = -1;
    return (
      <p ref={wordParent}>
        {verse}.{" "}
        {words.map((word, i) => {
          if (word === "." || word === "," || word === " ") {
            return <React.Fragment key={i}>{word}</React.Fragment>;
          } else {
            index++;
            return (
              <Word
                key={i}
                word={word}
                index={index}
                setPreludeIndex={setPreludeIndex}
              />
            );
          }
        })}
      </p>
    );
  }
  return (
    <p ref={wordParent}>
      {verse}.{" "}
      {words.map((word, i) => {
        if (word === "." || word === "," || word === " ") {
          return <React.Fragment key={i}>{word}</React.Fragment>;
        } else {
          return <Word key={i} word={word} />;
        }
      })}
    </p>
  );
};

export default memo(Lyrics);
