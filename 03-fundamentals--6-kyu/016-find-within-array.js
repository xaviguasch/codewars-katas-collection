// We'll create a function that takes in two parameters:

// a sequence (length and types of items are irrelevant)
// a function (value, index) that will be called on members of the sequence and their index. The function will return either true or false.
// Your function will iterate through the members of the sequence in order until the provided function returns true; at which point your function will return that item's index.

// If the function given returns false for all members of the sequence, your function should return -1.

// var trueIfEven = function(value, index) { return (value % 2 === 0) };
// findInArray([1,3,5,6,7], trueIfEven) // should === 3

const findInArray = (array, iterator) => {
  for (let i = 0; i < array.length; i++) {
    if (iterator(array[i], i)) {
      return i
    }
  }

  return -1
}

const trueIfEven = (value, index) => {
  return value % 2 === 0
}

const neverTrue = (value, index) => {
  return value === value * 2
}

const trueIfValueEqualsIndex = (value, index) => {
  return value === index
}

console.log(findInArray([], trueIfEven))
console.log(findInArray([1, 3, 5, 6, 7], trueIfEven))
console.log(findInArray([2, 4, 6, 8], trueIfEven))
console.log(findInArray([2, 4, 6, 8], neverTrue))
console.log(findInArray([13, 5, 3, 1, 4, 5], trueIfValueEqualsIndex))

// ALTERNATIVE SOLUTIONS

// const findInArray = (array, iterator) => array.findIndex(iterator)

// var findInArray = function(array, iterator) {
//   return array.map(iterator).indexOf(true);
// };

// var findInArray = function(array, iterator) {
//   return array.indexOf(array.find(iterator));
// };
