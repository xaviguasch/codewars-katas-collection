// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

const sumDigits = (number) => {
  return number
    .toString()
    .split('')
    .map((el) => Number(el))
    .filter((el) => !isNaN(el))
    .reduce((acc, currV) => acc + currV, 0)
}

console.log(sumDigits(10))
console.log(sumDigits(99))
console.log(sumDigits(-32))
