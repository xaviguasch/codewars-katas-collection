// DESCRIPTION:
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

const reverseNumber = (n) => {
  const arr = Array.from(n.toString())

  let newArr
  let middleArr

  if (arr[0] === '-') {
    arr.shift()
    newArr = arr.reverse()
    middleArr = newArr.map((char) => Number(char))
    middleArr.unshift('-')
  } else {
    newArr = arr.reverse()
    middleArr = newArr
  }

  return Number(middleArr.join(''))
}

console.log(reverseNumber(123))
console.log(reverseNumber(-123))
console.log(reverseNumber(1000))
console.log(reverseNumber(4321234))
console.log(reverseNumber(5))
console.log(reverseNumber(0))
console.log(reverseNumber(98989898))

// ALTERNATIVE SOLUTIONS
// function reverseNumber(n) {
//   let isNegative = n < 0
//   let reverseAsString = Math.abs(n).toString().split('').reverse().join('')
//   let result = Number(reverseAsString)

//   return isNegative ? -result : result
// }

// function reverseNumber(n) {
//   let x = Math.abs(n)
//   let y = 0
//   while (x > 0) {
//     y = y * 10 + (x % 10)
//     x = Math.floor(x / 10)
//   }
//   return Math.sign(n) * y
// }
