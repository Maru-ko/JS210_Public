// function getAlphabet(upperLower) {
//   let start = upperLower === 0 ? 65 : 97;
//   const alphabet = [];

//   for (idx = start; idx <= start + 25; idx++) {
//     alphabet.push(String.fromCharCode(idx));
//   }
//   return alphabet;
// }

function getAlphabet(upperLower) {
  let start = upperLower === 0 ? 65 : 97;
  let alphabet = '';

  for (let idx = start; idx <= start + 25; idx++) {
    alphabet += String.fromCharCode(idx);
  }
  return alphabet;
}

function rot13(string) {

  const upperAlpha = getAlphabet(0);
  const lowerAlpha = getAlphabet(1);
  let result = '';

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    let idx1 = upperAlpha.indexOf(char);
    let idx2 = lowerAlpha.indexOf(char);

    if (idx1 === -1 && idx2 === -1) {
      result += char;
    } else if (idx1 === -1) {
      result += lowerAlpha[(idx2 + 13) % 26];
    } else {
      result += upperAlpha[(idx1 + 13) % 26];
    }
  }

  return result;

}