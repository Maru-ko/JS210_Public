function twice(num) {
  let number = String(num);
  let left = '';
  let right = '';
  let mid = number.length / 2;
  
  for (let idx = 0; idx < mid; idx++) {
    left += number[idx];
    right += number[mid + idx];
  }

  return left === right ? num : num * 2;  
}