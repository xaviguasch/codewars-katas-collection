// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

const reverseLetter = (str) => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  return str
    .split('')
    .reverse()
    .filter((char) => alphabet.indexOf(char) !== -1)
    .join('')
}

console.log(reverseLetter('krishan'))
console.log(reverseLetter('ultr53o?n'))
console.log(reverseLetter('ab23c'))
console.log(reverseLetter('krish21an'))
