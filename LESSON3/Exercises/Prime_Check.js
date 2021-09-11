function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let idx = 2; idx < number; idx++) {
    if (number % idx === 0) {
      return false;
    }
  }

  return true;
}



function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (idx = 2; idx < number; idx++) {
    if (number % idx === 0) {
      return false;
    }
  }

  return true;
}

// futher exploration

function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  let divisor = 3;

  while (divisor < number) {
    if (number % disor === 0) {
      return false;
    }
    divisor += 2;
  }

  return true;
}