function utf16Value(string) {
  let value = 0;
  for (let idx = 0; idx < string.length; idx++) {
    value += string.charCodeAt(idx);
  }
  return value;
}