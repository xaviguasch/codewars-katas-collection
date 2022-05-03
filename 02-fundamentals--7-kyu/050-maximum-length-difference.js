// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

const mxdiflg = (a1, a2) => {
  if (a1.length === 0 || a2.length === 0) return -1

  const a1Lengths = a1.map((str) => str.length)
  const a2Lengths = a2.map((str) => str.length)

  const a1Max = a1Lengths.reduce((a, b) => Math.max(a, b))
  const a2Max = a2Lengths.reduce((a, b) => Math.max(a, b))

  const a1Min = a1Lengths.reduce((a, b) => Math.min(a, b))
  const a2Min = a2Lengths.reduce((a, b) => Math.min(a, b))

  return a1Max - a2Min >= a2Max - a1Min ? a1Max - a2Min : a2Max - a1Min
}

var s1 = [
  'hoqq',
  'bbllkw',
  'oox',
  'ejjuyyy',
  'plmiis',
  'xxxzgpsssa',
  'xxwwkktt',
  'znnnnfqknaz',
  'qqquuhii',
  'dvvvwz',
]
var s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']
console.log(mxdiflg(s1, s2))

// ALTERNATIVE SOLUTION

// function mxdiflg(a1, a2) {
//   if (a1.length === 0 || a2.length === 0) return -1
//   let l1 = a1.map(str => str.length)
//   let l2 = a2.map(str => str.length)
//   return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
// }
