import React, { useState, useEffect, memo } from "react";
import { Midi } from "@tonejs/midi";
import Lyrics from "./lyrics";
import { loadNote, playNote, stopNote } from "../helper/audioPlayer";
import isNextChantDefined from "../helper/isNextChantDefined";

const Player = (props) => {
  const { pathname: path } = props.location;
  const { chants } = props;
  const [wordIndex, setWordIndex] = useState(undefined);
  const [allNotes, setAllNotes] = useState([]);

  // 파트
  const [sopPlayer, setSopPlayer] = useState(undefined);
  const [altoPlayer, setAltoPlayer] = useState(undefined);
  const [tenPlayer, setTenPlayer] = useState(undefined);
  const [bassPlayer, setBassPlayer] = useState(undefined);

  // 절
  const [verseIndex, setVerseIndex] = useState(1);

  const id = Number(path.substring(8));

  let chant;
  for (let i = 0; i < chants.length; i++) {
    if (chants[i].id === id) {
      chant = chants[i];
      break;
    }
  }

  useEffect(() => {
    (async function () {
      const midi = await Midi.fromUrl(`../midi/${id}.mid`);
      console.log("midi : ", midi);
      const soprano = midi.tracks[0];
      const alto = midi.tracks[1];
      const tenor = midi.tracks[2];
      const bass = midi.tracks[3];
      const newNotes = [];
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

        newNotes.push(obj);
        sopIdx++;
      }

      console.log("allNotes 설정 : ", newNotes);
      setAllNotes(newNotes);
    })();
  }, []);

  // 필요한 음원 불러오기
  useEffect(() => {
    if (allNotes.length > 0) {
      const pitchs = {};
      allNotes.forEach((note) => {
        if (note.soprano) pitchs[note.soprano.pitch] = 1;
        if (note.alto) pitchs[note.alto.pitch] = 1;
        if (note.bass) pitchs[note.bass.pitch] = 1;
        if (note.tenor) pitchs[note.tenor.pitch] = 1;
      });

      const loadPitchs = [];
      for (let key in pitchs) {
        loadPitchs.push(key);
      }
      // console.log("필요한 음원 불러오기");
      loadNote.apply(null, loadPitchs);
    }
  }, [allNotes]);

  const handleReleaseButton = () => {
    if (sopPlayer) stopNote(sopPlayer);
    if (altoPlayer) stopNote(altoPlayer);
    if (tenPlayer) stopNote(tenPlayer);
    if (bassPlayer) stopNote(bassPlayer);
  };

  const handlePlayButton = () => {
    let currentNotes;
    // 처음 연주시
    if (wordIndex === undefined) {
      currentNotes = allNotes[0];
      setWordIndex(0);
    } else {
      // 끝까지 연주했을 때
      if (wordIndex + 1 === allNotes.length) {
        currentNotes = allNotes[0];
        setWordIndex(0);
        if (isNextChantDefined(verseIndex, chant)) {
          console.log("다음 절로 갑니다.");
          setVerseIndex(verseIndex + 1);
        } else {
          console.log("처음 절로 돌아갑니다.");
          setVerseIndex(1);
        }
        // 처음 연주 이후
      } else {
        setWordIndex(wordIndex + 1);
        currentNotes = allNotes[wordIndex + 1];
      }
    }
    console.log("currentNotes : ", currentNotes);

    // 각 파트를 소리 내기 전에 이전의 소리를 멈춤
    const { soprano, alto, tenor, bass } = currentNotes;
    if (soprano && sopPlayer) stopNote(sopPlayer);
    if (alto && altoPlayer) stopNote(altoPlayer);
    if (tenor && tenPlayer) stopNote(tenPlayer);
    if (bass && bassPlayer) stopNote(bassPlayer);

    // 연주
    if (soprano) setSopPlayer(playNote(soprano.pitch));
    if (alto) setAltoPlayer(playNote(alto.pitch));
    if (tenor) setTenPlayer(playNote(tenor.pitch));
    if (bass) setBassPlayer(playNote(bass.pitch));
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
              verse="1"
              verseIndex={verseIndex}
              lyrics={chant.one}
              wordIndex={wordIndex}
            />
          )}
          {chant.two && (
            <Lyrics
              key="2"
              verse="2"
              verseIndex={verseIndex}
              lyrics={chant.two}
              wordIndex={wordIndex}
            />
          )}
          {chant.three && (
            <Lyrics
              key="3"
              verse="3"
              verseIndex={verseIndex}
              lyrics={chant.three}
              wordIndex={wordIndex}
            />
          )}
          {chant.four && (
            <Lyrics
              key="4"
              verse="4"
              verseIndex={verseIndex}
              lyrics={chant.four}
              wordIndex={wordIndex}
            />
          )}
          {chant.five && (
            <Lyrics
              key="5"
              verse="5"
              verseIndex={verseIndex}
              lyrics={chant.five}
              wordIndex={wordIndex}
            />
          )}
          {chant.six && (
            <Lyrics
              key="6"
              verse="6"
              verseIndex={verseIndex}
              lyrics={chant.six}
              wordIndex={wordIndex}
            />
          )}
          {chant.seven && (
            <Lyrics
              key="7"
              verse="7"
              verseIndex={verseIndex}
              lyrics={chant.seven}
              wordIndex={wordIndex}
            />
          )}
          {chant.eight && (
            <Lyrics
              key="8"
              verse="8"
              verseIndex={verseIndex}
              lyrics={chant.eight}
              wordIndex={wordIndex}
            />
          )}
        </div>
        <div id="buttons">
          <button onMouseDown={handleReleaseButton}>Release</button>
          <button onMouseDown={handlePlayButton}>Play</button>
        </div>
      </section>
    </main>
  );
};

export default memo(Player);
