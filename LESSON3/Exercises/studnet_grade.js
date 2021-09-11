let counter = 0;
let currentScore = 0;

while (counter < 4) {
  let grade = prompt('Etner score 1:');
  counter++;
  currentScore += Number(grade);
}

let average = currentScore / 3;
let grade = 'F';

if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
} 

let message = `Based on the average of your 3 scores your letter grade is "${grade}"`;
// console.log(currentScore);
console.log(message);
// console.log(grade);