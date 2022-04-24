// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz

const longest = (s1, s2) => {
  const arr = [...s1.split(''), ...s2.split('')]

  const sortedArr = arr.sort()

  const setOfArrValues = new Set(sortedArr)

  return Array.from(setOfArrValues).join('')
}

console.log(longest('aretheyhere', 'yestheyarehere'))
console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'))

// ALTERNATIVE SOLUTIONS

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// function longest(s1, s2) {
//   return Array.from(new Set(s1 + s2)).sort().join('');
// }
