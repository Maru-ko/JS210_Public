function multisum(num) {
  let result = 0;

  for (let idx = 1; idx <= num; idx++) {
    if (idx % 5 == 0 || idx % 3 == 0) {
      result += idx;
    }
  }
  return result;
}