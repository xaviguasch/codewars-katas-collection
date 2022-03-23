// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

const find_average = (array) => {
  if (typeof array !== 'undefined' && array.length === 0) return 0
  return array.reduce((acc, currV) => acc + currV, 0) / array.length
}

console.log(find_average([10, 5, 20, 15]))
console.log(find_average([]))
