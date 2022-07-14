// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = (text) => {
  const letters = text.split('')

  const uniqs = letters.filter((letter, index) => letters.indexOf(letter) === index)

  return uniqs.map((letter) => [letter, text.split(letter).length - 1])
}

console.log(orderedCount('abracadabra'))
console.log(orderedCount('Code Wars'))
console.log(orderedCount('233312'))

// ALTERNATIVE SOLUTIONS

// const orderedCount = (s) =>
//   Array.from(
//     s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map())
//   )

// const orderedCount = (str) =>
//   [...new Set([...str])].map((char) => [char, str.split(char).length - 1])

// var orderedCount = function (text) {
//   var arr = []
//   for (var i = 0; i < text.length; ++i) {
//     var k = 0
//     for (var j = 0; j < arr.length; ++j) if (arr[j][0] == text[i]) k++
//     if (k == 0) {
//       for (var j = i; j < text.length; ++j) if (text[j] == text[i]) k++
//       arr.push([text[i], k])
//     }
//   }
//   return arr
// }

// const orderedCount = (text) => {
//   // O(n)
//   const result = []
//   const letters = {}

//   for (let i = 0, l = text.length; i < l; i++) {
//     const char = text[i]
//     const index = letters[char]

//     if (index === undefined) {
//       letters[char] = i
//       result.push([char, 1])
//     } else {
//       result[index][1]++
//     }
//   }

//   return result
// }
