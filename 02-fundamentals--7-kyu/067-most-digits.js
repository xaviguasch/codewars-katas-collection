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

// ALTERNATIVE SOLUTIONS

// const findLongest = (l) => l.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a))

// function findLongest(array) {
//   return array.reduce((res, curr) =>
//     String(res).length < String(curr).length ? curr : res
//   )
// }

// function findLongest(array) {
//   let num = '0'
//   for (let i = 0; i < array.length; i++) {
//     let string = array[i].toString()
//     if (string.length > num.length) {
//       num = string
//     }
//   }
//   return parseInt(num)
// }

// findLongest = (arr) => arr.sort((a, b) => (b + '').length - (a + '').length)[0]
