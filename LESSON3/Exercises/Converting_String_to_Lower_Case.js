// function genUpperAlpha() {
//   const alpha = [];
//   for (char = 65; char <= 90; char++) {
//     alpha.push(String.fromCharCode(char));
//   }
//   return alpha;
// }

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

const upperAlpha = getAlphabet(0);
const lowerAlpha = getAlphabet(1);

function toLowerCase(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (upperAlpha.indexOf(string[idx]) !== -1) {
      result += lowerAlpha[idx];
    } else {
      result += string[idx];
    }
  }
  return result;
}











