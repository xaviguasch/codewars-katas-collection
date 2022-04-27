// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

const seriesSum = (n) => {
  if (n === 0) return '0.00'
  if (n === 1) return '1.00'

  let sum = 1

  let partial = 1

  for (let i = 2; i <= n; i++) {
    partial += 3
    sum += 1 / partial
  }

  return sum.toFixed(2).toString()
}

console.log(seriesSum(1))
console.log(seriesSum(2))
console.log(seriesSum(3))
console.log(seriesSum(4))
