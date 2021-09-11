function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let idx = 2; idx < number; idx++) {
    if (number % idx === 0) {
      return false;
    }

  }
  return true;
  }

function checkGoldback(expectedSum) {
  if (expectedSum < 4) {
    return false;
  }

  const primeArr = [];
  for (let idx = 2; idx < expectedSum; idx++) {
    if (isPrime(idx)) {
      primeArr.push(idx);
    }
  } 

  let max = primeArr.length - 1;
  let arr_last = max;
  for (let idx = 0; idx < arr_last; idx++) {
    if (primeArr[idx] + primeArr[max] === expectedSum) {
      console.log(primeArr[idx], primeArr[max]);
    }
    max--;
    console.log(primeArr[idx],primeArr[max])
  }
}