/*

Pedac, what happened? 

we'd like to check if first or last index === ''.
if last index and first index === ''. lets start the show

if last index !== '', then focus on starting on first // same vice versa

we start at index 0, progress until we find something that is not '' then stop
same thing backwards 

*/

function trim(str) {
  if (str === '') {
    return '';
  }
  let strSize = str.length - 1;
  let startOfString = 0;
  let endOfString = strSize;
  let magicString = '';

  for (let idx = 0; idx <= strSize; idx++) {
    if (str[idx] !== ' ') {
      startOfString = idx;
      break;
    } 
  }

  for (let idx = strSize; idx >= startOfString; idx--) {
    if (str[idx] !== ' ') {
      endOfString = idx;
      break;
    }
  }

  if (startOfString === 0 && endOfString === strSize) {
    return '';
  }
 
  for (let idx = startOfString; idx <= endOfString; idx++) {
    magicString += str[idx];
  }

  return magicString;
}