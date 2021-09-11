function substring(string, start, end) {
  let result = '';
  let strSize = string.length - 1;

  if (start > end ) {
    let num = start;
    start = end;
    end = num;
  } else if (start === end) {
    return result;
  } else if (end === undefined) {
    end = strSize + 1;
  } else if (start < 0 || !start) {
    start = 0;
  } else if (end < 0 || !end) {
    end = 0;
  }
  console.log(start, end);
  for (let idx = start; idx < end; idx++) {
    result += string[idx];
  }
  return result;

}