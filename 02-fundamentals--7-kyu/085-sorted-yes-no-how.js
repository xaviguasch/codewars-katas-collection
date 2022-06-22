// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

const areArraysEqual = (originalArr, otherArr) => {
  if (
    originalArr.length === otherArr.length &&
    originalArr.every((el, idx) => el === otherArr[idx])
  ) {
    return true
  } else {
    return false
  }
}

const isSortedAndHow = (array) => {
  const arrayCopy = [...array]
  const arrayCopy2 = [...array]

  const arrayAsc = arrayCopy.sort((a, b) => a - b)
  const arrayDesc = arrayCopy2.sort((a, b) => b - a)

  return areArraysEqual(array, arrayAsc)
    ? 'yes, ascending'
    : areArraysEqual(array, arrayDesc)
    ? 'yes, descending'
    : 'no'
}

console.log(isSortedAndHow([1, 2]))
console.log(isSortedAndHow([15, 7, 3, -8]))
console.log(isSortedAndHow([4, 2, 30]))
