function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  }
  let answer = (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)
  return answer;
}
