// In the function map, create a new array and store in a variable
// loop theArray and call the fnc for each thing in the array,
// passing in the item from the current loop into the call to fnc
// add the returned value from fnc to the new array
// return the new array
function map1 (theArray, fnc) {
  debugger
  let newArr = [];
  theArray.forEach(function (element) {
    newArr.push(fnc(element));
  });
  return newArr;
}

// create a new array
// loop theArray and call the fnc for each thing in the array,
// passing in the item from the current loop
// fnc will return true or false, if true add the item to the new array else do not
// return the new array
function filter1 (theArray, fnc) {
  debugger
  let newArray = [];
  theArray.forEach(function (element) {
    if (fnc(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}

// loop theArray and call the fnc for each thing in the array,
// passing in the item from the current loop
// fnc will return true or false, if true return the item
// return null
function find1 (theArray, fnc) {
  debugger
  theArray.forEach(function (element) {
    if (fnc(element)) {
      return element;
    }
  });
  return null;
}

// for (let i = 0; i < theArray.length; i++) {
//  if (fnc(theArray[i])) {
//    return theArray[i];
//  }
// }

//return the last item in theArray
function findLast1 (theArray) {
  debugger

}

// return the first element of the array
function head1 (theArray) {
  debugger

  return theArray[0];
}

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
function reverse1 (theArray) {
  debugger

}

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
function tail1 (theArray) {
  debugger

}

// implement the most basic sorting algorithm there is
// assume the array will always have numbers
// use a while loop to constantly loop theArray until it is sorted
// use a for loop to loop theArray
// look at the current item and the next item, compare them
// if the items are out of order, swap them
// initialize a variable that indicates if a swap had to be done, set it to false
// if a swap is done set it to true
// after each for loop check the variable, if true, continue the while loop
// if false return theArray
function sort1 (theArray) {
  let swapMade = true;
  while (swapMade) {
    swapMade = false;
    for (let i = 0; i < theArray.length - 1; i++) {
      if (theArray[i] > theArray[i + 1]) {
        const temp = theArray[i + 1];
        theArray[i + 1] = theArray[i];
        theArray[i] = temp;
        swapMade = true;
      }
    }
  }
  return theArray;
}

const names = ['Jon', 'Bob', 'Ted', 'Barney', 'Lilly', 'Robin', 'Saul', 'Axe'];
const myNumbers = [4, 3, 55, 22, 99, 1913, 7, 5, 4, 2, 1];

function addHello (name) {
  return 'Hello ' + name;
}
function findThree (name) {
  return name.length === 3;
}
function findBarney (name) {
  return name === 'Barney';
}

const results = head1(names);
if (results === 'Jon') {
  console.log('head1 works');
} else {
  console.log('head1 fails');
  console.log('results= ' + results + ' and should= "Jon"');
}

const results1 = map1(names, addHello);
if (results1 == [
  'Hello Jon',
  'Hello Bob',
  'Hello Ted',
  'Hello Barney',
  'Hello Lilly',
  'Hello Robin',
  'Hello Saul',
  'Hello Axe'
]) {
  console.log('map1 works');
} else {
  console.log('map1 fails');
  console.log('results= ' + results1 + ' and should= [Hello Jon, Hello Bob, Hello Ted, Hello Barney, Hello Lilly, Hello Robin, Hello Saul, Hello Axe]');
}

const results2 = sort1(myNumbers);
if (results2 === [1, 2, 3, 4, 4, 5, 7, 22, 55, 99, 1913]) {
  console.log('sort1 works');
} else {
  console.log('sort1 fails');
  console.log('results= ' + results2 + ' and should= [1, 2, 3, 4, 4, 5, 7, 22, 55, 99, 1913]');
}

const results3 = filter1(names, findThree);
if (results3 === [
  'Jon', 'Bob', 'Ted', 'Axe'
]) {
  console.log('filter1 works');
} else {
  console.log('filter1 fails');
  console.log('results= ' + results3 + ' and should= [Jon, Bob, Ted, Axe]');
}

const results4 = find1(names, findBarney);
if (results4 === 'Barney') {
  console.log('find1 works');
} else {
  console.log('find1 fails');
  console.log('results= ' + results4 + ' and should= "Barney"');
}

// findLast should find the last name of 'Axe'

// reverse should return an array with the elements in the opposite order
// ['Axe','Saul','Robin','Lilly','Barney','Ted','Bob','Jon']
// tail should return all elements in an array except the first one
// ['Bob','Ted','Barney','Lilly','Robin','Saul','Axe'];
