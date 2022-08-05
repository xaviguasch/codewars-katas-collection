// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

const solution = (value) => `Value is ${value.toString().padStart(5, '0')}`

console.log(solution(5))
console.log(solution(1204))
console.log(solution(109))
console.log(solution(0))

// ALTERNATIVE SOLUTION

// function solution(value) {
//   return 'Value is ' + ('00000' + value).slice(-5)
// }
