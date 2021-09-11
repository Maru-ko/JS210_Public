const PASSWORD = 'password'
let failedAttempts = 0;

while (true) {
  let guess = prompt('What is the password:');

  if (guess === PASSWORD) {
    console.log('You have successsfully logged in.');
    break;
  }

  failedAttempts += 1;

  if (failedAttempts === 3) {
    console.log('You have been denied access.');
    break;
  }
}







