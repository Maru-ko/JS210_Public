let readlineSync = require('readline-sync');

console.log('お会計をお願いします')
let billAmount = readlineSync.prompt();
billAmount = parseFloat(billAmount);

console.log('チップのパーセンテージはいくつですか');
let tipPercentage = readlineSync.prompt();
tipPercentage = parseFloat(tipPercentage) / 100;

let tipAmount = billAmount * tipPercentage;
let totalBill = billAmount + tipAmount;

console.log(`チップは $${tipAmount}`);
console.log(`合計は $${totalBill}`)