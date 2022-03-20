// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

const squareSum = (numbers) => {
  return numbers.map((num) => Math.pow(num, 2)).reduce((acc, currVal) => acc + currVal, 0)
}

console.log(squareSum([1, 2, 2]))

// ALTERNATIVE SOLUTION

// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }
