// const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

let notes = {};

const VOLUME = 0.5;
const FADEOUT_SECONDS = 0.2;

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
    fetch(`../audio/${pitch}.mp3`)
      .then((data) => data.arrayBuffer())
      .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
      .then((decodedAudio) => {
        notes[pitch] = decodedAudio;
      });
  });
};

const playNote = (pitch) => {
  pitch = convertNotation(pitch);
  const audio = notes[pitch];

  const source = context.createBufferSource();
  source.buffer = audio;

  const gainNode = context.createGain();
  gainNode.gain.setValueAtTime(VOLUME, context.currentTime);

  source.connect(gainNode);
  gainNode.connect(context.destination);
  source.start(context.currentTime);

  return { source, gainNode };
};

const fadeoutNote = ({ source, gainNode }) => {
  gainNode.gain.setValueAtTime(VOLUME, context.currentTime);
  gainNode.gain.linearRampToValueAtTime(
    0,
    context.currentTime + FADEOUT_SECONDS
  );
  source.stop(context.currentTime + FADEOUT_SECONDS + 0.1);
};

const removeNote = (...notes) => {
  notes.forEach((note) => {
    if (note) fadeoutNote(note);
  });

  setTimeout(function () {
    console.log('메모리에서 노트 제거');
    for (let pitch in notes) {
      notes[pitch].audioContext.close();
    }
    // for (let pitch in notes2) {
    //   notes2[pitch].audioContext.close();
    // }
    notes = {};
  }, FADEOUT_SECONDS * 1000 + 100);
};

export default { loadNote, playNote, fadeoutNote, removeNote };
