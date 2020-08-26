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

    const context = new AudioContext();

    // pass it into the audio context
    const source1 = context.createMediaElementSource(notes1[pitch].audio);
    const source2 = context.createMediaElementSource(notes2[pitch].audio);

    // 게인 조절
    const gainNode1 = context.createGain();
    const gainNode2 = context.createGain();

    gainNode1.gain.setValueAtTime(0, context.currentTime);
    gainNode2.gain.setValueAtTime(0, context.currentTime);
    source1.connect(gainNode1);
    source2.connect(gainNode2);
    gainNode1.connect(context.destination);
    gainNode2.connect(context.destination);

    notes1[pitch]['gainNode'] = gainNode1;
    notes2[pitch]['gainNode'] = gainNode2;
    notes1[pitch]['audioContext'] = context;
    notes2[pitch]['audioContext'] = context;
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
  }, FADEOUT_SECONDS * 1000 + 10);
};

const removeNote = (...notes) => {
  notes.forEach((note) => {
    if (note) fadeoutNote(note);
  });

  setTimeout(function () {
    console.log('메모리에서 노트 제거');
    for (let pitch in notes1) {
      notes1[pitch].audioContext.close();
    }
    // for (let pitch in notes2) {
    //   notes2[pitch].audioContext.close();
    // }
    notes1 = {};
    notes2 = {};
  }, FADEOUT_SECONDS * 1000 + 100);
};

export default { loadNote, playNote, fadeoutNote, removeNote };
