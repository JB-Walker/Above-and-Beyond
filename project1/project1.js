'use strict';

var cars = ['Ford', 'Chevy', 'Ram', 'Tesla'];                // 1
debugger;
console.log(cars.length);
debugger;
var moreCars = ['Toyota', 'Mazda', 'Nissan', 'Honda'];      // 2
debugger;
var totalCars = cars.concat(moreCars);
debugger;
console.log(totalCars.indexOf('Honda'));                    // 3
debugger;
console.log(totalCars.lastIndexOf('Ford'));
debugger;
var stringOfCars = totalCars.join();                        // 4
debugger;
totalCars = stringOfCars.split(',');                        // 5
debugger;
var carsInReverse = totalCars.reverse();                    // 6
debugger;
carsInReverse.sort();                                       // 7
debugger;
window.alert(carsInReverse.indexOf('Chevy'));
debugger;
var removedCars = carsInReverse.slice(1, 3);                // 8
debugger;
carsInReverse.splice(1, 2, 'Ford', 'Honda');                // 9
debugger;
carsInReverse.push(removedCars[0]);                         // 10
debugger;
carsInReverse.push(removedCars[1]);
debugger;
console.log(carsInReverse.pop());                           // 11
debugger;
console.log(carsInReverse.shift());                         // 12
debugger;
carsInReverse.unshift('Smart');                             // 13
debugger;
var numbers = [23, 45, 0, 2];                               // 14
debugger;
numbers.forEach(function (element, index, arr) {
  arr[index] += 2;
});


debugger;
