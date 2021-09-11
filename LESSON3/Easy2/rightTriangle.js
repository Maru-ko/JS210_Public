function triangle(number) {

  let max = number;
  for (let idx = 0; idx <= number; idx++) {
    let star = '';
    let spez = '';
    spez += repeater(' ', max);
    star += repeater('*', idx);
    console.log(spez + star);
    max--;
  }
}


function repeater(char, times) {
  result = '';
  while(result.length < times) {
    result += char;
  }

  return result;
}

