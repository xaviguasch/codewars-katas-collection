// You received an array with two strings. Create a function that will return their product as a string. E.g.

// arrMultiply(['9','6']) should return '54'

const arrMultiply = (arr) => {
  const resultInNums = Number(arr[0]) * Number(arr[1])
  return resultInNums.toString()
}

console.log(arrMultiply(['4', '5']))
console.log(arrMultiply(['2', '-5']))
console.log(arrMultiply(['9', '0']))

// ALTERNATIVE SOLUTIONS

// let arrMultiply = ([a, b]) => '' + a * b

// const arrMultiply = ([a, b]) => `${a * b}`

// const arrMultiply = (arr) => `${arr[0] * arr[1]}`

// const arrMultiply = (a) => String(a[0] * a[1])

// const arrMultiply = (arr) => '' + eval(arr.join('*'))

// function arrMultiply([a, b]) {
//   return a * b + ''
// }
