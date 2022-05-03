// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

const smallEnough = (a, limit) => a.every((val) => val <= limit)

console.log(smallEnough([66, 101], 200))
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))

// ALTERNATIVE SOLUTION

function smallEnough(a, limit) {
  return Math.max(...a) <= limit
}
