// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

const distinct = (a) => {
  let newArr = []

  for (let i = 0; i <= a.length - 1; i++) {
    if (newArr.indexOf(a[i]) < 0) {
      newArr.push(a[i])
    }
  }

  return newArr
}

console.log(distinct([1]))
console.log(distinct([1, 2]))
console.log(distinct([1, 1, 2]))

// ALTERNATIVE SOLUTIONS

// function distinct(a) {
//   return [...new Set(a)]
// }
