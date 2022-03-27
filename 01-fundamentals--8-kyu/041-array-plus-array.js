// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

const arrayPlusArray = (arr1, arr2) => {
  const jointArr = [...arr1, ...arr2]

  return jointArr.reduce((acc, currV) => acc + currV, 0)
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]))

// ALTERNATIVE SOLUTIONS

// function arrayPlusArray(arr1, arr2) {
//   return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }

// // accepts indefinite number of arrays
// function arrayPlusArray(...arrays) {
//   return [].concat(...arrays).reduce((a,b) => a+b,0)
// }
