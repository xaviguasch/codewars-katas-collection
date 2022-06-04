// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.

const countWords = (string) => string.split(/\s/g).filter(Boolean).length

console.log(countWords('Hello'))
console.log(countWords('Hello, World!'))
console.log(countWords('Hello, World!'))
console.log(
  countWords(
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  )
)
console.log(countWords(''))
console.log(countWords('   Arthur    '))

// ALTERNATIVE SOLUTIONS

// function countWords(str) {
//   return (str.match(/[^\s]+/g) || []).length
// }

// const countWords = (str) => str.split(/\s+/).filter((x) => x).length

// function countWords(str) {
//   str = str.trim()
//   if (str === '') return 0
//   return str.split(/\s+/).length
// }

// const countWords = (str) => str.split(/\S+/).length - 1
