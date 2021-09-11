function splitString(string, delimiter) {
  console.log(delimiter);
  if (delimiter === undefined) {
    console.log('ERROR: No Delimiter');
    return;
  }

  if (delimiter === '') {
    arrayPrint(eachChar(string));
  }

  const wordArray = [];
  let tempWord = '';
  let counter = 0;

  for (let idx = counter; idx < string.length; idx++) {
    if (string[idx] !== delimiter) {
      tempWord += string[idx];
    } else  if (string[idx] === delimiter) {
      wordArray.push(tempWord);
      tempWord = '';
    }
    //console.log(string[idx]);
  }
  if (tempWord !== '') {
    wordArray.push(tempWord);
  }
  arrayPrint(wordArray);
}

function eachChar(word) {
  let wordsize = word.length - 1;
  const charred = [];
  for (let idx = 0; idx < word.length; idx++) {
    charred.push(word[idx]);
  }
  return charred;
}

function arrayPrint(arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    console.log(arr[idx]);
  }
}