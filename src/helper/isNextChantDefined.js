const isNextChantDefined = (orderIndex, lyrics) => {
  if (orderIndex === 1) {
    if (lyrics[1] === undefined) return false;
    return true;
  } else if (orderIndex === 2) {
    if (lyrics[2] === undefined) return false;
    return true;
  } else if (orderIndex === 3) {
    if (lyrics[3] === undefined) return false;
    return true;
  } else if (orderIndex === 4) {
    if (lyrics[4] === undefined) return false;
    return true;
  } else if (orderIndex === 5) {
    if (lyrics[5] === undefined) return false;
    return true;
  } else if (orderIndex === 6) {
    if (lyrics[6] === undefined) return false;
    return true;
  } else if (orderIndex === 7) {
    if (lyrics[7] === undefined) return false;
    return true;
  } else if (orderIndex === 8) {
    if (lyrics[8] === undefined) return false;
    return true;
  }
};

module.exports = isNextChantDefined;
