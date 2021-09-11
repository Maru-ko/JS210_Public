function isLeapYear(year) {
  let answer = (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)
  console.log(answer);
}
