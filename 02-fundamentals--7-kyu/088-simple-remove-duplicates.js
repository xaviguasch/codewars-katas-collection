// DESCRIPTION:
// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

const solve = (arr) => {
  let newArr = arr.slice().filter((n, i) => arr.indexOf(n) !== i)
  for (let i = 0; i < newArr.length; i++) {
    arr.splice(arr.indexOf(newArr[i]), 1)
  }
  return arr
}

console.log(solve([3, 4, 4, 3, 6, 3]))
console.log(solve([1, 2, 1, 2, 1, 2, 3]))
console.log(solve([1, 2, 3, 4]))
console.log(solve([1, 1, 4, 5, 1, 2, 1]))
console.log(solve([1, 2, 1, 2, 1, 1, 3]))

// ALTERNATIVE SOLUTIONS

// function solve(arr) {
//   return arr.filter((val, i) => arr.lastIndexOf(val) == i)
// }

// const solve = (arr) => [...new Set(arr.reverse())].reverse()

// function solve(arr) {
//   var a = []
//   var ar = arr.reverse()
//   for (var i = 0; i < ar.length; ++i) if (a.indexOf(ar[i]) == -1) a.push(ar[i])
//   return a.reverse()
// }

// const solve = (a) => Array.from(new Set(a.reverse())).reverse()
