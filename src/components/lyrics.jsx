import React from "react";

const Lyrics = (props) => {
  const { order, lyrics } = props;
  const words = lyrics.split("");
  let count = 0;

  return (
    <p>
      {order}.{" "}
      {words.map((word) => {
        if (word === "." || word === " ") {
          return <span>{word}</span>;
        } else {
          count++;
          return (
            <span id={count} className="lyrics-word">
              {word}
            </span>
          );
        }
      })}
    </p>
  );
};

export default Lyrics;
