function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 !== 0) {
    return console.log(null);
  }

  // let minimum = Math.round(expectedSum / 2);

  const arr = [];

  for (let idx = expectedSum; idx > 4; idx--) {
    if (isPrime(idx)) {
      arr.push(idx);
    }
    //arr.push(idx);
  }

  let max = arr.length - 1 
  const new_arr = []
  let last_arr = max //- 1
  console.log(arr);
  console.log(max);
  console.log(last_arr);
  for(let idx = 0; idx <= max; idx++) {

    if (arr[idx] + arr[last_arr]) {
      console.log(arr[idx], arr[last_arr]);
    }
  }
  last_arr--;
}


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
