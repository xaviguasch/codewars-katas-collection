// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

const countBy = (x, n) => {
  const newArr = [x]
  let currNum = x
  for (let i = 1; i < n; i++) {
    currNum += x
    newArr.push(currNum)
  }

  return newArr
}

console.log(countBy(1, 10))
console.log(countBy(2, 5))

// ALTERNATIVE SOLUTION

// function countBy(x, n) {
//   var z = [];
//   for (i = 1; i <= n; i++) {
//       z.push(x * i);
//   }
//   return z;
// }
