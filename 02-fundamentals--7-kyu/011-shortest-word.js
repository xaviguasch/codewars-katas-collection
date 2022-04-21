// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const findShort = (s) => {
  const wordsArr = s.split(' ')

  let shortestWordLength = wordsArr[0].length

  wordsArr.map((w) => {
    if (w.length <= shortestWordLength) {
      shortestWordLength = w.length
    }
  })

  return shortestWordLength
}

console.log(findShort('bitcoin take over the world maybe who knows perhap'))
console.log(
  findShort('turns out random test cases are easier than writing out basic ones')
)
console.log(findShort("Letn's travel abroad shall we"))

// ALTERNATIVE SOLUTIONS

// function findShort(s) {
//   return Math.min(...s.split(' ').map((s) => s.length))
// }
