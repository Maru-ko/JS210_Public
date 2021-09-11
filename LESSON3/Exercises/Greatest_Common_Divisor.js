function greatestCommonDivisor (a, b) {
  let max = a;

  if (b > a ) {
    max = b
  }

  for (let idx = max; idx > 0; idx--) {
    if (a % idx == 0 && b % idx == 0) {
      return console.log(idx);
    }
  }
}

// LS solution

function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}