function getAlphabet(upperLower) {
  let start = upperLower === 0 ? 65 : 97;
  let alphabet = '';

  for (let idx = start; idx <= start + 25; idx++) {
    alphabet += String.fromCharCode(idx);
  }
  return alphabet;
}

function rot13(string) {
  const UPPER_ALPHA = getAlphabet(0);
  const LOWER_ALPHA = getAlphabet(1);
  let result = '';

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    let idx1 = UPPER_ALPHA.indexOf(char);
    let idx2 = LOWER_ALPHA.indexOf(char);

    if (idx1 === -1 && idx2 === -1) {
      result += char;
    } else if (idx1 === -1) {
      result += LOWER_ALPHA[(idx2 + 13) % 26];
    } else {
      result += UPPER_ALPHA[(idx1 + 13) % 26];
    }
  }

  return result;
}