function multiplesOfThreeAndFive() {
  for (let idx = 0; idx <= 100; idx++) {
    if(idx % 5 === 0 && idx % 3 === 0) {
      
      console.log(idx + '!');;
    } else if(idx % 3 === 0) {
      
      console.log(String(idx));
    } else if(idx % 5 === 0) {
      
      console.log(String(idx));
    }
  }
}


// Further Exploration

function multiplesOfThreesAndFives(min, max) {
  for (let idx = min; min <= max; idx++) {
    if(idx % 5 === 0 && idx % 3 === 0) {
      
      console.log(idx + '!');;
    } else if(idx % 3 === 0) {
      
      console.log(String(idx));
    } else if(idx % 5 === 0) {
      
      console.log(String(idx));
    }
  }
}