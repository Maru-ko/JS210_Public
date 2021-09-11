//const letsTryExpressions = function()
function printMultiples(number) {
  for(let idx = 100; idx > 0; idx--) {
    if(idx % number === 0 && idx % 2 === 1) {
      console.log(idx);
    }
  }
}


// further exploration

function printMultiples(number) {
  for(let max = Math.floor(100 / number) * number; max >= 0; max--) {
    if(max % number === 0 && max % 2 === 1) {
      console.log(max);
    }
  }
}