const notes1 = {};
const notes2 = {};

const MASTER_VOLUME = 0.5;
const INTERVAL = 1;

const convertNotation = (note) => {
  let alphabet = note[0].toLowerCase();
  if (note[1] === '#') {
    return alphabet + 's' + note[2];
  } else {
    return alphabet + note[1];
  }
};

const loadNote = (...pitchs) => {
  pitchs.forEach(async (pitch) => {
    pitch = convertNotation(pitch);
    notes1[pitch] = await new Audio(`../audio/${pitch}.mp3`);
    notes2[pitch] = await new Audio(`../audio/${pitch}.mp3`);
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

const fadeoutNote = (note) => {
  let volume = MASTER_VOLUME;

  const fadeout = setInterval(() => {
    volume -= 0.01;
    if (volume > 0) {
      note.volume = volume.toFixed(2);
    } else {
      clearInterval(fadeout);
      note.volume = 0;
      note.pause();
      note.currentTime = 0;
      return undefined;
    }
  }, INTERVAL);
};

const removeNote = (...notes) => {
  notes.forEach((note) => {
    if (note) fadeoutNote(note);
  });
};

export default { loadNote, playNote, fadeoutNote, removeNote };
