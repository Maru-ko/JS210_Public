function oddNumbers(max) {
  // for (let idx = 1; idx <= max; idx += 2) {
  //   console.log(idx)
  // }

  for (let idx = 1; idx <= max; idx++) {
    if (idx % 2 !== 0) {
      console.log(idx);
    }
  }
}