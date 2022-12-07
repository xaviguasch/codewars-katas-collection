// You received an array with two strings. Create a function that will return their product as a string. E.g.

// arrMultiply(['9','6']) should return '54'

const arrMultiply = (arr) => {
  const resultInNums = Number(arr[0]) * Number(arr[1])
  return resultInNums.toString()
}

console.log(arrMultiply(['4', '5']))
console.log(arrMultiply(['2', '-5']))
console.log(arrMultiply(['9', '0']))
