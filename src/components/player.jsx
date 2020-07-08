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
    <main id="player">
      <section className="section-padding">
        <p>
          {id}번 {getChant()}
        </p>
        <div></div>
        <button className="beat-button">Tap</button>
      </section>
    </main>
  );
};

export default Player;
