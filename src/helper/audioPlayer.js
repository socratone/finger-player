const notes1 = {};
const notes2 = {};

const MASTER_VOLUME = 0.5;

const convertNotation = (note) => {
  let alphabet = note[0].toLowerCase();
  if (note[1] === '#') {
    return alphabet + 's' + note[2];
  } else {
    return alphabet + note[1];
  }
};

const loadNote = (...pitchs) => {
  pitchs.forEach((pitch) => {
    pitch = convertNotation(pitch);
    notes1[pitch] = new Audio(`../audio/${pitch}.mp3`);
    notes2[pitch] = new Audio(`../audio/${pitch}.mp3`);
  });
};

const playNote = (pitch) => {
  pitch = convertNotation(pitch);
  const note1 = notes1[pitch];
  const note2 = notes2[pitch];
  if (note1.currentTime === 0) {
    console.log('note1 재생');
    note1.volume = MASTER_VOLUME;
    note1.play();
    return note1;
  } else if (note2.currentTime === 0) {
    console.log('note2 재생');
    note2.volume = MASTER_VOLUME;
    note2.play();
    return note2;
  }
};

const fadeoutNote = (player) => {
  player.volume = 0;
  player.pause();
  player.currentTime = 0;
};

module.exports = { loadNote, playNote, fadeoutNote };
