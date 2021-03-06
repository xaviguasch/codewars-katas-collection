// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

const isVow = (a) =>
  a.map((x) => (/[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x))

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106,
  ])
)

console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]))

// ALTERNATIVE SOLUTIONS

// const v = { 97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u' }
// const isVow = (a) => a.map((x) => v[x] || x)

// const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)
