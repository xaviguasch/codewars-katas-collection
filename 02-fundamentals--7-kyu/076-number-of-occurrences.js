// Write a function that returns the number of occurrences of an element in an array.

// Examples
// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences("a") === 0;

Array.prototype.numberOfOccurrences = function (num) {
  return this.filter((el) => el === num).length
}

// var arr = [4, 0, 4]
// console.log(arr.numberOfOccurrences(4), 2)

var arr = [0, 1, 2, 2, 3]
console.log(arr.numberOfOccurrences(0))

console.log(arr.numberOfOccurrences(4))
console.log(arr.numberOfOccurrences(2))
console.log(arr.numberOfOccurrences('a'))

// ALERNATIVE SOLUTIONS

// Array.prototype.numberOfOccurrences = function (element) {

//   var counter = 0;
//   for (var i = 0; i < this.length; i++)
//   {
//       if (this[i] == element) { counter++; }
//   }

//   return counter;
// }

// Array.prototype.numberOfOccurrences = function(element) {
//   return this.reduce(function(acc, current) {
//     return current === element ? acc + 1 : acc;
//   }, 0);
// }
