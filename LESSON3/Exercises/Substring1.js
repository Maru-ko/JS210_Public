function substr(string, start, length) {
  let strSize = string.length;
  let result = '';
  if (start < 0) {
    start = strSize + start;
  } else if (start + length < 1) {
    return result;
  }

  for (let idx = start; idx < strSize; idx++) {
    length--;
    result += string[idx];
    if (length === 0) {
      break;
    }
  }
  return result;
}