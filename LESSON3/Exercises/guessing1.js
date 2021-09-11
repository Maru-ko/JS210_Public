const PASSWORD = 'password';

let failedAttempts = 0;

while (true) {
  let guess = prompt('What is the password');

  if (guess === PASSWORD) {
    console.log('Correct');
    break;
  }

  failedAttempts++;

  if (failedAttempts === 3) {
    console.log('try again text time');
    break;
  }
}



