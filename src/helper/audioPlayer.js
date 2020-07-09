const notes = {};

const convertNotation = (note) => {
  let alphabet = note[0].toLowerCase();
  if (note[1] === "#") {
    return alphabet + "s" + note[2];
  } else {
    return alphabet + note[1];
  }
};

const playNote = (pitch) => {
  pitch = convertNotation(pitch);
  const note = new Audio(`../audio/${pitch}.mp3`);
  note.volume = 0.5;
  note.play();
  return note;
};

const stopNote = (player) => {
  player.pause();
  // TODO: 페이드 아웃 구현
};

module.exports = { playNote, stopNote };
