// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

const numberLength = (number) => `${number}`.length

const findLongest = (array) => {
  const numberLengths = array.map((number) => numberLength(number))
  const biggestLength = Math.max(...numberLengths)
  const firstBiggest = array.find((num) => numberLength(num) === biggestLength)
  return firstBiggest
}

console.log(findLongest([1, 10, 100]))
console.log(findLongest([9000, 8, 800]))
console.log(findLongest([8, 900, 500]))

console.log(numberLength(10))
