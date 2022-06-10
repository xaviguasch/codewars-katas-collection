// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

const min = (arr, toReturn) => {
  const minValue = Math.min(...arr)

  return toReturn === 'value' ? minValue : arr.indexOf(minValue)
}

console.log(min([1, 2, 3, 4, 5], 'value'))
console.log(min([1, 2, 3, 4, 5], 'index'))

// ALTERNATIVE SOLUTION

// function min(arr, toReturn) {
//   return arr.reduce(
//     function (o, v, i) {
//       return v < o.value ? ((o.value = v), (o.index = i), o) : o
//     },
//     { value: Infinity, index: 0 }
//   )[toReturn]
// }

// function min(arr, toReturn) {
//   return arr.reduce(function(o, v, i){
//     return (v < o.value) ? (o.value = v, o.index = i, o) : o;
//   }, {value: Infinity, index: 0})[toReturn];
// }
