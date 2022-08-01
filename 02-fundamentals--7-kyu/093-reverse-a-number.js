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
