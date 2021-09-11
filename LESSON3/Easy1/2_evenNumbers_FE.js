function evenNumbers(min, max) {
  let start;
  if (max === undefined) {
    start = 1;
    max = min;
  } else {
    start = min;
  }

  for (let idx = start; idx <= max; idx++) {
    if (idx % 2 === 0) {
      console.log(idx);
    }
  }
}