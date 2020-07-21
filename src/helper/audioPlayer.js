const AudioContext = window.AudioContext || window.webkitAudioContext;

const notes1 = {};
const notes2 = {};

const MASTER_VOLUME = 0;
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
    notes1[pitch] = { audio: await new Audio(`../audio/${pitch}.mp3`) };
    notes2[pitch] = { audio: await new Audio(`../audio/${pitch}.mp3`) };

    const audioContext1 = new AudioContext();
    const audioContext2 = new AudioContext();

    // pass it into the audio context
    const track1 = audioContext1.createMediaElementSource(notes1[pitch].audio);
    const track2 = audioContext2.createMediaElementSource(notes2[pitch].audio);
    track1.connect(audioContext1.destination);
    track2.connect(audioContext2.destination);

    // 게인 조절
    const gainNode1 = audioContext1.createGain();
    const gainNode2 = audioContext2.createGain();
    track1.connect(gainNode1).connect(audioContext1.destination);
    track2.connect(gainNode2).connect(audioContext2.destination);

    notes1[pitch]['gainNode'] = gainNode1;
    notes2[pitch]['gainNode'] = gainNode2;
    notes1[pitch]['audioContext'] = audioContext1;
    notes2[pitch]['audioContext'] = audioContext2;
  });
};

const playNote = (pitch) => {
  pitch = convertNotation(pitch);
  const note1 = notes1[pitch];
  const note2 = notes2[pitch];
  if (note1.audio.currentTime === 0) {
    if (note1.audioContext.state === 'suspended') note1.audioContext.resume();
    // console.log('note1 재생');
    note1.gainNode.gain.value = MASTER_VOLUME;
    note1.audio.play();
    return note1;
  } else if (note2.audio.currentTime === 0) {
    if (note2.audioContext.state === 'suspended') note2.audioContext.resume();
    // console.log('note2 재생');
    note2.gainNode.gain.value = MASTER_VOLUME;
    note2.audio.play();
    return note2;
  }
};

const stopNote = (note) => {
  let volume = MASTER_VOLUME;

  // console.log('note:', note);
  const fadeout = setInterval(() => {
    volume -= 0.01;
    if (volume > -1) {
      note.gainNode.gain.value = volume.toFixed(2);
    } else {
      clearInterval(fadeout);
      note.gainNode.gain.value = -1;
      note.audio.pause();
      note.audio.currentTime = 0;
      return undefined;
    }
  }, INTERVAL);
};

module.exports = { loadNote, playNote, stopNote };
