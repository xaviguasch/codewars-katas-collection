// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

const hasUniqueChars = (str) => {
  const charObj = {}

  str.split('').forEach((char) => {
    if (charObj[char]) {
      charObj[char] += 1
    } else {
      charObj[char] = 1
    }
  })

  let isUnique = true

  for (const key in charObj) {
    if (charObj[key] !== 1) {
      isUnique = false
    }
  }

  return isUnique
}

console.log(hasUniqueChars('  nAa'))
console.log(hasUniqueChars('abcdef'))
console.log(hasUniqueChars('aA'))
console.log(hasUniqueChars('++-'))

// ALTERNATIVE SOLUTIONS

// let hasUniqueChars = (str) => new Set(str).size === str.length;

// function hasUniqueChars(str) {
//   return str.split('').every(function (v, i, arr) {
//     return arr.indexOf(v) === i
//   })
// }
