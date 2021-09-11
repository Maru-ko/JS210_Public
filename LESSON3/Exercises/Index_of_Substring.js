function indexOf(firstString, secondString) {
  section = secondString.length - 1;
  let counter = 0;
  for (let idx = 0; idx <= firstString.length; idx++) {

    let strPortion = '';

    for(let idx = counter; idx <= (counter + section); idx++) {
      strPortion += firstString[idx];
      console.log(strPortion);
    }
    if (secondString == strPortion) {
      console.log(counter);
      return '出来た！';
    }
    counter++;
  }
  return -1;
}

function lastIndexOf(firstString, secondString) {
  section = secondString.length - 1;
  const resultArray = [];
  let counter = 0;
  for (idx = 0; idx <= firstString.length; idx++) {

    let strPortion = '';

    for(let idx = counter; idx <= (counter + section); idx++) {
      strPortion += firstString[idx];
      console.log(strPortion);
    }
    if (secondString == strPortion) {
      //console.log(counter);
      //return '出来た！';
      resultArray.push(counter);
    }
    counter++;
  }

  size = resultArray.length
  if (size == 0) {
    return -1;
  }
  return resultArray[size - 1];

}