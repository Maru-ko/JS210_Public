function logInBox(string) {
  let upDog = '';
  let corner = '+';
  let pipe = '|';
  let line = '-';
  let space = ' ';
  let padding = '';

  for (let idx = 0; idx <= string.length + 2; idx++) {
    upDog += line;
    padding += space;
  }

  upDog = corner + upDog + corner;
  padding = pipe + padding + pipe;
  message = pipe + space + string + space + pipe;

  console.log(upDog);
  console.log(padding);
  console.log(message);
  console.log(padding);
  console.log(upDog);
}