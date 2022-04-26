// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

const solution = (str, ending) => {
  const endingLength = ending.length

  if (endingLength === 0) return true

  return str.slice(-endingLength) === ending ? true : false
}

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))

console.log(solution('abc', 'bc'))
console.log(solution('abc', ''))

// ALTERNATIVE SOLUTION

// function solution(str, ending) {
//   return str.endsWith(ending)
// }
