const isNextChantDefined = (orderIndex, chant) => {
  if (orderIndex === 1) {
    if (chant.two === undefined) return false;
    return true;
  } else if (orderIndex === 2) {
    if (chant.three === undefined) return false;
    return true;
  } else if (orderIndex === 3) {
    if (chant.four === undefined) return false;
    return true;
  } else if (orderIndex === 4) {
    if (chant.five === undefined) return false;
    return true;
  } else if (orderIndex === 5) {
    if (chant.six === undefined) return false;
    return true;
  } else if (orderIndex === 6) {
    if (chant.seven === undefined) return false;
    return true;
  } else if (orderIndex === 7) {
    if (chant.eight === undefined) return false;
    return true;
  } else if (orderIndex === 8) {
    if (chant.nine === undefined) return false;
    return true;
  }
};

module.exports = isNextChantDefined;
