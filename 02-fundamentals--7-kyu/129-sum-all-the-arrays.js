// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

const arraySum = (arr) => {
  return arr.reduce(
    (acc, currV) =>
      acc + (Array.isArray(currV) ? arraySum(currV) : isNaN(currV) ? 0 : currV)
  )
}

console.log(arraySum([1, 2]))
console.log(arraySum([1, 2, 3]))
console.log(arraySum([1, 2, [1, 2]]))

// ALTERNATIVE SOLUTIONS

// function arraySum(arr) {
//   var sum = 0
//   for (var i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       sum += arraySum(arr[i])
//     } else if (typeof arr[i] === 'number') {
//       sum += arr[i]
//     }
//   }
//   return sum
// }

// function arraySum(arr) {
//   return (arr + '').split(',').reduce((s, cv) => s + (+cv || 0), 0)
// }

// function arraySum(arr) {
//   return arr
//     .toString()
//     .split(',')
//     .filter((a) => !Number.isNaN(+a))
//     .map((a) => +a)
//     .reduce((a, b) => a + b)
// }

// const flatten = (a) => (Array.isArray(a) ? [].concat(...a.map(flatten)) : a)
// const arraySum = (arr) => flatten(arr).reduce((s, v) => (isFinite(v) ? s + v : s))
