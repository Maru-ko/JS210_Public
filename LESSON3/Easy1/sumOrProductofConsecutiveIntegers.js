let readlineSync = require('readline-sync');

console.log('Please enter an integer greater than 0:');
let numAnswer = readlineSync.prompt();
numAnswer = parseInt(numAnswer);

console.log('Enter "s" to compute the sum, or "p" to compute the product:');
let charAnswer = readlineSync.prompt();
charAnswer = charAnswer.trim();
let result = 1;
let sumOrProduct = charAnswer === 's' ? true : charAnswer === 'p' ? false : undefined;

for (idx = 1; idx <= numAnswer; idx++) {
  if (sumOrProduct) {
    result += idx;
  } else if (!sumOrProduct) {
    result *= idx;
  } else  if (sumOrProduct === undefined) {
    return console.log('Error you must enter "s" or "p"');
  }
}

if (sumOrProduct) {
  return console.log(`The sum of integers between 1 and ${numAnswer} is ${result - 1}.`);
} else {
  return console.log(`The product of the integers between 1 and ${numAnswer} is ${result}.`) 
}

return console.log(result);



// if (charAnswer == 's') {
//   for (let idx = 1; idx <= numAnswer; idx++) {
//     result += idx;
//   }
// } else if (charAnswer == 'p') {
//   for (let idx = 1; idx <= numAnswer; idx++) {
//     result *= idx;
//   }
// }

// console.log(result);