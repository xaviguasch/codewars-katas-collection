// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

const squareOrSquareRoot = (array) => {
  return array.map((num) => {
    if (Number.isInteger(Math.sqrt(num))) return Math.sqrt(num)
    else return Math.pow(num, 2)
  })
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))
console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1]))
console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6]))

// ALTERNATIVE SOLUTION

// function squareOrSquareRoot(array) {
//   return array.map((x) => {
//     const r = Math.sqrt(x)
//     return r % 1 == 0 ? r : x * x
//   })
// }
