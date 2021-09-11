function stringy(number) {
  let string = '';
  let oneZero = '';
  for (let idx = 0; idx < number; idx++) {
    oneZero = idx % 2 === 0 ? 1 : 0;
    string += oneZero;
  }

  return string;
}