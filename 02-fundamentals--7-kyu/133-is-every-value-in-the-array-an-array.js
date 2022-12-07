// DESCRIPTION:
// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

const arrCheck = (arr) => arr.every((val) => Array.isArray(val))

console.log(arrCheck([]))
console.log(arrCheck([['string']]))
console.log(arrCheck([[], {}]))
console.log(arrCheck([[1], [2], [3]]))
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']))

// ALTERNATIVE SOLUTION

// const arrCheck = a => a.every(Array.isArray) ;
