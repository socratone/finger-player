import React from "react";

const Player = (props) => {
  const { pathname } = props.location;
  const { chants } = props;
  let path = pathname;
  const id = Number(path.substring(8));

  const getChant = () => {
    for (let i = 0; i < chants.length; i++) {
      if (chants[i].id === id) return chants[i].title;
    }
  };

  return (
    <main>
      <p>
        {id}번 {getChant()} 곡을 준비중입니다.
      </p>
      <p>가사</p>
      <button style={{ fontSize: "1rem", padding: "1rem" }}>클릭</button>
    </main>
  );
};

export default Player;
