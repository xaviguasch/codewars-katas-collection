// DESCRIPTION:
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

const getNumberFromString = (s) => {
  const result = s
    .split('')
    .filter((char) => !isNaN(char))
    .filter((el) => Number(el))
    .map((el) => Number(el))
    .join('')

  return Number(result)
}

console.log(getNumberFromString('1'))
console.log(getNumberFromString('123'))
console.log(getNumberFromString('this is number: 7'))

// ALTERNATIVE SOLUTION

// function getNumberFromString(s) {
//   return +s.replace(/\D/g, '')
// }
