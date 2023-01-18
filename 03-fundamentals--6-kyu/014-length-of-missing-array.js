// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

const getLengthOfMissingArray = (arrayOfArrays) => {
  const lengths = (arrayOfArrays || [])
    .map((a) => (a ? a.length : 0))
    .sort((a, b) => a - b)

  if (lengths.includes(0)) {
    return 0
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1
    }
  }

  return 0
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(getLengthOfMissingArray([[null], [null, null, null]]))
console.log(
  getLengthOfMissingArray([
    ['a', 'a', 'a'],
    ['a', 'a'],
    ['a', 'a', 'a', 'a'],
    ['a'],
    ['a', 'a', 'a', 'a', 'a', 'a'],
  ])
)
console.log(getLengthOfMissingArray([]))

// ALTERNATIVE SOLUTIONS

// function getLengthOfMissingArray(arr) {
//   return !arr ||
//     (ar = arr.map((x, i) => (x ? x.length : 0)).sort((a, b) => a - b)).indexOf(0) > -1
//     ? 0
//     : ar.filter((x, i) => x != i + ar[0]).concat([1])[0] - 1
// }

// function getLengthOfMissingArray(arrayOfArrays) {
//   let newArr = (arrayOfArrays || []).map((a) => (a ? a.length : 0)).sort((a, b) => a - b)

//   if (newArr.includes(0)) {
//     return 0
//   }
//   console.log(newArr)
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i + 1] - newArr[i] > 1) {
//       return newArr[i] + 1
//     }
//   }
//   return 0
// }
