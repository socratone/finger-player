import React, { useEffect, memo } from "react";
import Word from "./word";

const PLAYED_WORD_COLOR = "green";

const Lyrics = (props) => {
  const { verse, verseIndex, lyrics, wordIndex } = props;
  const words = lyrics.split("");

  const wordParent = React.createRef();

  useEffect(() => {
    const spans = wordParent.current.children;
    if (verse === String(verseIndex) && spans[wordIndex]) {
      spans[wordIndex].style.color = PLAYED_WORD_COLOR;
      spans[wordIndex].style.fontWeight = "900";
    }
  }, [wordIndex, verse, verseIndex, wordParent]);

  useEffect(() => {
    const spans = wordParent.current.children;
    if (
      verse !== String(verseIndex) &&
      spans[0].style.color === PLAYED_WORD_COLOR
    ) {
      console.log("spans : ", spans);
      for (let i = 0; i < spans.length; i++) {
        spans[i].style.color = "unset";
        spans[i].style.fontWeight = "unset";
      }
    }
  }, [verseIndex]);

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
