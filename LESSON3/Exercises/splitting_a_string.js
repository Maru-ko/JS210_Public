/*
Peeedaaaaac tttttaaaaaaaaiimmmmeeee!!!

input str and another str
output logs split strings separately

since I don't know if there's a `puts` kind of like method that could be called on an array, to that it could output each
element on a new line.

we are just going to store string in an array, and log to the console, each index in the array.
*/


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

  for (idx = counter; idx < string.length; idx++) {
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
  for (idx = 0; idx < word.length; idx++) {
    charred.push(word[idx]);
  }
  return charred;
}

function arrayPrint(arr) {
  for (idx = 0; idx < arr.length; idx++) {
    console.log(arr[idx]);
  }
}