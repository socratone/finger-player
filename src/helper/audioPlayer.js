const notes = {};

const convertNotation = (note) => {
  let alphabet = note[0].toLowerCase();
  if (note[1] === "#") {
    return alphabet + "s" + note[2];
  } else {
    return alphabet + note[1];
  }
};

const loadNote = (...pitchs) => {
  pitchs.forEach((pitch) => {
    pitch = convertNotation(pitch);
    notes[pitch] = new Audio(`../audio/${pitch}.mp3`);
  });
  console.log("로딩된 노트 : ", notes);
};

const playNote = (pitch) => {
  pitch = convertNotation(pitch);
  const note = notes[pitch];
  note.volume = 0.5;
  note.play();
  return note;
};

const stopNote = (player) => {
  player.pause();
  player.currentTime = 0;
  // TODO: 페이드 아웃 구현
};

module.exports = { loadNote, playNote, stopNote };
