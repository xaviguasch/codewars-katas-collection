// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

const noBoringZeros = (n) => Number(n.toString().replace(/0+$/, ''))

console.log(noBoringZeros(1450))
console.log(noBoringZeros(9600000))
console.log(noBoringZeros(1050))
console.log(noBoringZeros(-105))
console.log(noBoringZeros(0))

// ALTERNATIVE SOLUTIONS

// function noBoringZeros(n) {
//   while (n % 10 === 0 && n !== 0) {
//     n = n / 10
//   }
//   return n
// }

// RECURSION
// function noBoringZeros(n) {
//   return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
// }
