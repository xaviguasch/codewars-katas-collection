// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

const powersOfTwo = (n) => {
  let finalArr = []
  for (let i = 0; i <= n; i++) {
    finalArr.push(Math.pow(2, i))
  }

  return finalArr
}

console.log(powersOfTwo(0))
console.log(powersOfTwo(1))
console.log(powersOfTwo(4))
