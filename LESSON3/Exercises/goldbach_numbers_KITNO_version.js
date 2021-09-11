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

  const dumpArray = [];
  primeArr.forEach ((idx1) => {
    primeArr.forEach((idx2) => {
      if (idx1 + idx2 === expectedSum) {
        dumpArray.push(idx1);
        if (dumpArray.includes(idx2)) {
          return 'hi';
        }
        console.log(idx1, idx2);
      }
    })
  })

}



