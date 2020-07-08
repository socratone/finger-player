import React, { useEffect, memo } from "react";
import Word from "./word";

const Lyrics = (props) => {
  const { order, orderIndex, lyrics, wordIndex } = props;
  const words = lyrics.split("");

  const wordParent = React.createRef();

  useEffect(() => {
    const spans = wordParent.current.children;
    if (order === String(orderIndex) && spans[wordIndex]) {
      spans[wordIndex].style.color = "green";
      spans[wordIndex].style.fontWeight = "900";
    }
  }, [wordIndex, order, orderIndex, wordParent]);

  return (
    <p ref={wordParent}>
      {order}.{" "}
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
