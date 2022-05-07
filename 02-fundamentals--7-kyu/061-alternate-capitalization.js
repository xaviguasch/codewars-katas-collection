// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

const capitalize = (s) => {
  const oddLetters = s
    .split('')
    .map((letter, idx) => (idx % 2 === 0 ? letter.toUpperCase() : letter))
    .join('')

  const evenLetters = s
    .split('')
    .map((letter, idx) => (idx % 2 !== 0 ? letter.toUpperCase() : letter))
    .join('')

  return [oddLetters, evenLetters]
}

console.log(capitalize('abcdef'))
console.log(capitalize('codewars'))
console.log(capitalize('abracadabra'))
console.log(capitalize('codewarriors'))
