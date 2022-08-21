// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

const alternateCase = (s) => {
  return s
    .split('')
    .map((letter) =>
      letter.toLowerCase() === letter ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join('')
}

console.log(alternateCase('abc'))
console.log(alternateCase('ABC'))
console.log(alternateCase('Hello World'))
