// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

const noOdds = (values) => values.filter((val) => val % 2 === 0)

console.log(noOdds([0, 1]))
console.log(noOdds([0, 1, 2, 3]))
