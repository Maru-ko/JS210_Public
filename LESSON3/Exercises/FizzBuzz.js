function fizzBuzz() {
  for (let idx = 0; idx <= 100; idx++) {
    if(idx % 5 === 0 && idx % 3 === 0) { 
      console.log('FizzBuzz');
    } else if(idx % 3 === 0) {
      console.log('Fizz');
    } else if(idx % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(idx);
    }
  }
}

// LS solution

let fizzbuzz = () => {
  for (let idx = 0; idx <= 100; idx++) {
    let message = idx;

    if(idx % 3 === 0 && idx % 5 === 0) {
      message = 'FizzBuzz';
    } else if(idx % 3 === 0) {
      message = 'Fizz';
    } else if(idx % 5 === 0) {
      message = 'Buzz';
    }

    console.log(message);
  }
};