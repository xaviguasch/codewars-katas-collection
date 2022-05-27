// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

const parseF = (s) => (Number.isNaN(parseFloat(s)) ? null : parseFloat(s))

console.log(parseF('1'))
console.log(parseF('bbb'))
