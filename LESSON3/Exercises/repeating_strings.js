/*

pedac to the rescue

input: string and a number
if it is not a number, a negative number, all spaces it returns 'undefined'
if it is a 0 then we get ''


can't we jsut ad the string to itself several times?

*/ 

function repeat(string, times) {
  if ( times < 0 || typeof(times) !== 'number') {
    return undefined;
  } else if ( times === 1 ) {
    return string;
  }

  result = '';

  for (idx = 0; idx < times; idx++) {
    result += string;
  }

  return result;
}