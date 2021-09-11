let readlineSync = require('readline-sync');

console.log('お会計をお願いします')
let billAmount = readlineSync.prompt();
billAmount = parseInt(billAmount);

console.log('チップのパーセンテージはいくつですか');
let tipPercentage = readlineSync.prompt();
tipPercentage = parseInt(tipPercentage) / 100;

let tipAmount = billAmount * tipPercentage;
let totalBill = billAmount + tip;

console.log(`チップは $${tipAmount}`);
console.log(`合計は $${totalBill}`)