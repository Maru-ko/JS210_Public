/*

Pedac

input two strings
output boolean

if the searchString > in size then string = false
if str == ''  true

algo:

we use the almight 'for loop' we extract the size of the searchString from the original string and compare them, booya

*/

function startsWith(string, searchString) {
  let strSize = searchString.length;
  if (strSize > string.length) {
    return false;
 }

  let snippet = '';
  for (idx = 0; idx < strSize; idx++) {
    snippet += string[idx];
  }
  if (snippet !== searchString) {
    return false;
  }

  return true;
}