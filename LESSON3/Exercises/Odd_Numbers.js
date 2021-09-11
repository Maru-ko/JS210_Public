function logOddNumber(num) {
  for(let idx = 0; idx <= num; idx++) {
    if (idx % 2 === 1 ) {
      console.log(idx);
    }
  }
}

logOddNumber(5);

/*

idx should have started at 1, but what they didn't specify where to commence.
0 is an even number.

*/

// Further Exploration

function logOddNumbers(num) {
  for (let idx = 1; idx <= num; idx += 1) {
    if (idx % 2 === 0 ) {
      continue;
    }

    console.log(idx);
  }
}
