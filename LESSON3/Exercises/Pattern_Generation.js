// function generatePattern(nStars) {
//   for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
//     let string = '';

//     for (let digit = 1; digit <= lineNumber; digit += 1) {
//       string += String(digit);
//     }

//     for (let count = lineNumber + 1; count <= nStars; count += 1) {
//       string += '*';
//     }

//     console.log(string);
//   }
// }

function generatePattern(nStars) {
  string_length = ''
  for (let idx = 1; idx <= nStars; idx++) {
    string_length += String(idx);
  }

  sizer = string_length.length;
  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';

    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }

    for (let count = lineNumber + 1; count <= nStars; count += 1) {
      string += '*';
    }

    console.log(string);
  }

  console.log(string_length);
  console.log(string_length.length);
}

