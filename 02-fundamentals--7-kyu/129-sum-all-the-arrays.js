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
