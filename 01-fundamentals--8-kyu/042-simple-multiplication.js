// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = (number) => (number % 2 === 0 ? number * 8 : number * 9)

console.log(simpleMultiplication(2))
console.log(simpleMultiplication(1))
console.log(simpleMultiplication(8))
console.log(simpleMultiplication(4))

// ALTERNATIVE SOLUTION

// function simpleMultiplication(n) {
//   return n * (n % 2 ? 9 : 8);
// }
