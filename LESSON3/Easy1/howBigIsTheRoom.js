/*
const SQ_METER_TO_FEET = 10.7639;

let readLine = require(readline-sync);

"Enter the length of the room in meters:"
let length;
"Enter the width of the room in meters:"
let width;

`The are of the room is ${length * width} square meters (${Math.round((SQ_METER_TO_FEET * length) * (SQ_METER_TO_FEET * width))}`
*/


let readlineSync = require("readline-sync");

const SQ_METER_TO_FEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length); //Math.round(Number(length));

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);//Math.round(Number(width));

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQ_METER_TO_FEET);

console.log(
  `The are of the room is ${areaInMeters} square meters (${areaInFeet}) square feet.`

);