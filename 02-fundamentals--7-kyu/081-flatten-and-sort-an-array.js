// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

const flattenAndSort = (array) => {
  // new array method
  // return array.flat().sort((a, b) => a - b)

  const resultArr = []
  for (const intArr of array) {
    for (const el of intArr) {
      resultArr.push(el)
    }
  }
  return resultArr.sort((a, b) => a - b)
}

console.log(flattenAndSort([]))
console.log(flattenAndSort([[], []]))
console.log(flattenAndSort([[], [1]]))
console.log(
  flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
  ])
)
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))

// ALTERNATIVE SOLUTIONS

// function flattenAndSort(array) {
//   return [].concat(...array).sort((a, b) => a - b)
// }

// const flattenAndSort = array => array
//   .reduce((a, c) => [...a, ...c], [])
//   .sort((a, b) => a - b);
