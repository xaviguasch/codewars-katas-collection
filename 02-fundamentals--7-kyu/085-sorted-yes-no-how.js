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

// ALTERNATIVE SOLUTIONS

// const isSortedAndHow = (array) => {
//   let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0
//   let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0

//   return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
// }

// function isSortedAndHow(arr) {
//   return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
//     ? 'yes, ascending'
//     : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
//     ? 'yes, descending'
//     : 'no'
// }

// function isSortedAndHow(array) {
//   var ans
//   if (array[1] > array[0]) {
//     ans = 'yes, ascending'
//   }

//   if (ans === 'yes, ascending') {
//     for (var i = 1; i < array.length; i++) {
//       if (array[i] >= array[i - 1]) {
//         ans = 'yes, ascending'
//       } else return (ans = 'no')
//     }
//   }
//   if (ans !== 'yes, ascending') {
//     for (var i = 1; i < array.length; i++) {
//       if (array[i] <= array[i - 1]) {
//         ans = 'yes, descending'
//       } else return (ans = 'no')
//     }
//   }
//   return ans
// }

// const isSortedAndHow = (a) => {
//   const s = a.join``
//   return s === a.sort((x, y) => x - y).join``
//     ? 'yes, ascending'
//     : s === a.sort((x, y) => y - x).join``
//     ? 'yes, descending'
//     : 'no'
// }
