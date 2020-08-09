const AudioContext = window.AudioContext || window.webkitAudioContext;

let notes1 = {};
let notes2 = {};

// const MASTER_VOLUME = -0.5;
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
    notes1[pitch] = { audio: await new Audio(`../audio/${pitch}.mp3`) };
    notes2[pitch] = { audio: await new Audio(`../audio/${pitch}.mp3`) };

    const audioContext1 = new AudioContext();
    const audioContext2 = new AudioContext();

    // pass it into the audio context
    const source1 = audioContext1.createMediaElementSource(notes1[pitch].audio);
    const source2 = audioContext2.createMediaElementSource(notes2[pitch].audio);

    // 게인 조절
    const gainNode1 = audioContext1.createGain();
    const gainNode2 = audioContext2.createGain();

    gainNode1.gain.setValueAtTime(0, audioContext1.currentTime);
    gainNode2.gain.setValueAtTime(0, audioContext2.currentTime);
    source1.connect(gainNode1);
    source2.connect(gainNode2);
    gainNode1.connect(audioContext1.destination);
    gainNode2.connect(audioContext2.destination);

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
    console.log('note1 재생');
    note1.gainNode.gain.setValueAtTime(1, note1.audioContext.currentTime);
    note1.audio.play();
    return note1;
  } else if (note2.audio.currentTime === 0) {
    if (note2.audioContext.state === 'suspended') note2.audioContext.resume();
    console.log('note2 재생');
    note2.gainNode.gain.setValueAtTime(1, note2.audioContext.currentTime);
    note2.audio.play();
    return note2;
  }
};

const fadeoutNote = (note) => {
  const { audio, gainNode, audioContext } = note;
  gainNode.gain.setValueAtTime(gainNode.gain.value, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.0001,
    audioContext.currentTime + FADEOUT_SECONDS
  );

  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, FADEOUT_SECONDS * 1000);
};

const removeNote = () => {
  for (let pitch in notes1) {
    fadeoutNote(notes1[pitch]);
  }
  for (let pitch in notes2) {
    fadeoutNote(notes2[pitch]);
  }
  setTimeout(function () {
    console.log('메모리에서 노트 제거');
    for (let pitch in notes1) {
      notes1[pitch].audioContext.close();
    }
    for (let pitch in notes2) {
      notes2[pitch].audioContext.close();
    }
    notes1 = {};
    notes2 = {};
  }, FADEOUT_SECONDS * 1000 + 100);
};

export { loadNote, playNote, fadeoutNote, removeNote };
