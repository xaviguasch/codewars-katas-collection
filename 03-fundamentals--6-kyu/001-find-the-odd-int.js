// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

const findOdd = (a) => {
  const obj = {}

  a.forEach((a) => (obj[a] ? (obj[a] += 1) : (obj[a] = 1)))

  let result = ''

  for (const key in obj) {
    if (obj[key] % 2 !== 0) {
      result = key
    }
  }

  return Number(result)
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]))
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]))
console.log(findOdd([10]))
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))

// ALTERNATIVE SOLUTIONS

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }
