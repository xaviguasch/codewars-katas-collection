// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

const repeatStr = (n, s) => s.split('').join('').repeat(n)

console.log(repeatStr(5, 'Hello'))
