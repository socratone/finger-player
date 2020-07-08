import React, { useState, useEffect, memo } from "react";
import { Midi } from "@tonejs/midi";
import Lyrics from "./lyrics";

const Player = (props) => {
  const { pathname: path } = props.location;
  const { chants } = props;
  const [wordIndex, setWordIndex] = useState(-1);
  const [orderIndex, setOrderIndex] = useState(1);

  useEffect(() => {
    (async function () {
      const midi = await Midi.fromUrl("../midi/0002.mid");
      console.log("midi : ", midi);
      const soprano = midi.tracks[0];
      const alto = midi.tracks[1];
      const tenor = midi.tracks[2];
      const bass = midi.tracks[3];
      const allNotes = [];
      let [sopIdx, altoIdx, tenIdx, bassIdx] = [0, 0, 0, 0];

      // 소프라노 배열이 끝날 때까지 soprano의 값을 순서대로 넣는다.
      while (soprano.notes[sopIdx]) {
        let obj = {};
        const { name, ticks, durationTicks } = soprano.notes[sopIdx];
        obj["soprano"] = { pitch: name, ticks, durationTicks };

        // alto가 soprano보다 클 때까지
        while (alto.notes[altoIdx] && alto.notes[altoIdx].ticks <= ticks) {
          // 그러다 ticks이 일치하는 게 있으면 넣는다.
          if (alto.notes[altoIdx].ticks === ticks) {
            const { name, durationTicks } = alto.notes[altoIdx];
            obj["alto"] = {
              pitch: name,
              ticks,
              durationTicks,
            };
          }
          altoIdx++;
        }

        // tenor가 soprano보다 클 때까지
        while (tenor.notes[tenIdx] && tenor.notes[tenIdx].ticks <= ticks) {
          // 그러다 ticks이 일치하는 게 있으면 넣는다.
          if (tenor.notes[tenIdx].ticks === ticks) {
            const { name, durationTicks } = tenor.notes[tenIdx];
            obj["tenor"] = {
              pitch: name,
              ticks,
              durationTicks,
            };
          }
          tenIdx++;
        }

        // bass가 soprano보다 클 때까지
        while (bass.notes[bassIdx] && bass.notes[bassIdx].ticks <= ticks) {
          // 그러다 ticks이 일치하는 게 있으면 넣는다.
          if (bass.notes[bassIdx].ticks === ticks) {
            const { name, durationTicks } = bass.notes[bassIdx];
            obj["bass"] = {
              pitch: name,
              ticks,
              durationTicks,
            };
          }
          bassIdx++;
        }

        allNotes.push(obj);
        sopIdx++;
      }

      console.log("allNotes : ", allNotes);
    })();
  }, []);

  const id = Number(path.substring(8));

  let chant;
  for (let i = 0; i < chants.length; i++) {
    if (chants[i].id === id) {
      chant = chants[i];
      break;
    }
  }

  const handleTapButtonClick = () => {
    const preIndex = wordIndex;
    setWordIndex(preIndex + 1);
  };

  return (
    <main id="player">
      <section className="section-padding">
        <h3>
          {id}번 {chant.title}
        </h3>
        <div id="lyrics">
          {chant.one && (
            <Lyrics
              key="1"
              order="1"
              orderIndex={orderIndex}
              lyrics={chant.one}
              wordIndex={wordIndex}
            />
          )}
          {chant.two && (
            <Lyrics
              key="2"
              order="2"
              orderIndex={orderIndex}
              lyrics={chant.two}
              wordIndex={wordIndex}
            />
          )}
          {chant.three && (
            <Lyrics
              key="3"
              order="3"
              orderIndex={orderIndex}
              lyrics={chant.three}
              wordIndex={wordIndex}
            />
          )}
          {chant.four && (
            <Lyrics
              key="4"
              order="4"
              orderIndex={orderIndex}
              lyrics={chant.four}
              wordIndex={wordIndex}
            />
          )}
          {chant.five && (
            <Lyrics
              key="5"
              order="5"
              orderIndex={orderIndex}
              lyrics={chant.five}
              wordIndex={wordIndex}
            />
          )}
          {chant.six && (
            <Lyrics
              key="6"
              order="6"
              orderIndex={orderIndex}
              lyrics={chant.six}
              wordIndex={wordIndex}
            />
          )}
          {chant.seven && (
            <Lyrics
              key="7"
              order="7"
              orderIndex={orderIndex}
              lyrics={chant.seven}
              wordIndex={wordIndex}
            />
          )}
          {chant.eight && (
            <Lyrics
              key="8"
              order="8"
              orderIndex={orderIndex}
              lyrics={chant.eight}
              wordIndex={wordIndex}
            />
          )}
        </div>
        <button className="beat-button" onClick={handleTapButtonClick}>
          Tap
        </button>
      </section>
    </main>
  );
};

export default memo(Player);
