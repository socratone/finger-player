import React, { memo } from "react";

const Word = (props) => {
  const { word, index, setPreludeIndex } = props;

  const lyricsWord = React.useRef();

  const handleClick = () => {
    console.log(`전주 인덱스를 ${index}로 설정했습니다.`);
    setPreludeIndex(index);
    lyricsWord.current.classList.add("selected-word");
  };

  if (setPreludeIndex) {
    return (
      <span className="lyrics-word" ref={lyricsWord} onClick={handleClick}>
        {word}
      </span>
    );
  }
  return <span>{word}</span>;
};

export default memo(Word);
