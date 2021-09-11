const PASSWORD = 'password';
let failedAttempts = 0;

do {
  let guess = prompt('What is the password:')

  if (guess === PASSWORD) {
    break;
  }

  failedAttempts += 1;
} while (failedAttempts < 3);

if (failedAttempts === 3) {
  console.log('You have been denied access.');
} else {
  console.log('You have successfully logged in.')
}