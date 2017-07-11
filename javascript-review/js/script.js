function getDate () {
  return new Date();
}
console.log('1. Display the current date and time: ' + getDate());

function convertToString (num) {
  return num.toString();
}
var num = Math.PI;
console.log('2. Convert the number Math.PI to a string: ' + convertToString(num));

function convertToNum (str) {
  return parseInt(str, 2);
}
var str = 'AAA000';
console.log('3. Convert the string "' + str + '" to a number: ' + convertToNum(str));

function determineType (unknown) {
  return typeof unknown;
}
var testArray = [true, 0, NaN, 'ACA', '', null, undefined, {a: 1}, Math.PI];
for (var i = 0; i < testArray.length; i++) {
  console.log('4-' + (i + 1) + '. The type of ' + testArray[i] + ' is ' + determineType(testArray[i]));
}

function addTwo (num1, num2) {
  return num1 + num2;
}
var num1 = 82837479287347;
var num2 = 27834987293478;
console.log('5. The numbers ' + num1 + ' + ' + num2 + ' = ' + addTwo(num1, num2));
