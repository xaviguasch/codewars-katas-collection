// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

const switcheroo = (x) => {
  return x
    .split('')
    .map((char) => (char === 'a' ? (char = 'b') : char === 'b' ? (char = 'a') : char))
    .join('')
}

console.log(switcheroo('abc'))
console.log(switcheroo('aaabcccbaaa'))
console.log(switcheroo('ccccc'))

// ALTERNATIVE SOLUTIONS

// function switcheroo(x) {
//   return [...x].map((v) => (v == 'a' ? (v = 'b') : v == 'b' ? (v = 'a') : v)).join('')
// }

// const switcheroo = (x) => x.replace(/[ab]/g, (x) => (x == 'a' ? 'b' : 'a'))
