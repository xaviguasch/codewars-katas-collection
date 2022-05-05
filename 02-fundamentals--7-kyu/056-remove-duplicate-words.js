// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

const removeDuplicateWords = (s) => {
  return [...new Set(s.split(' '))].join(' ')
}

console.log(
  removeDuplicateWords(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  )
)

// ALTERNATIVE SOLUTIONS

// const removeDuplicateWords = (s) => {
//   let arr = s.split(' ')
//   let sFiltered = []

//   for (let str of arr) if (!sFiltered.includes(str)) sFiltered.push(str)

//   return sFiltered.join(' ')
// }

// function removeDuplicateWords(s) {
//   return s
//     .split(' ')
//     .filter((n, i, s) => {
//       return s.indexOf(n) === i
//     })
//     .join(' ')
// }
