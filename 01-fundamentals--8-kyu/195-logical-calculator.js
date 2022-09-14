// Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).

const logicalCalc = (array, op) => {
  if (op == 'AND') return array.reduce((acc, currV) => acc && currV)
  if (op == 'OR') return array.reduce((acc, currV) => acc || currV)
  if (op == 'XOR') return array.reduce((acc, currV) => acc !== currV)
}

console.log(logicalCalc([true, true, true, false], 'AND'))
console.log(logicalCalc([true, true, true, false], 'OR'))
console.log(logicalCalc([true, true, true, false], 'XOR'))
console.log(logicalCalc([true, true, false, false], 'AND'))
console.log(logicalCalc([true, true, false, false], 'OR'))
console.log(logicalCalc([true, true, false, false], 'XOR'))

// ALTERNATIVE SOLUTIONS

// var ops = {
//   AND: (a, b) => a && b,
//   OR: (a, b) => a || b,
//   XOR: (a, b) => a !== b,
// }
// function logicalCalc(array, op) {
//   return array.reduce(ops[op])
// }

// ///////////
// ///////////

// function logicalCalc(array, op) {
//   var result = array[0]
//   for (var i = 1; i < array.length; i++) {
//     if (op == 'AND') {
//       result = result && array[i]
//     }
//     if (op == 'OR') {
//       result = result || array[i]
//     }
//     if (op == 'XOR') {
//       result = result != array[i]
//     }
//   }
//   return result
// }

// ///////////
// ///////////

// function logicalCalc(array, op) {
//   if (op === 'AND') return array.every((v) => v)
//   else if (op === 'OR') return array.some((v) => v)
//   else return !!array.reduce((s, v) => s ^ v)
// }

// ///////////
// ///////////

// function logicalCalc(array, op) {
//   switch (op) {
//     case 'AND':
//       return array.reduce(and)
//     case 'OR':
//       return array.reduce(or)
//     case 'XOR':
//       return array.reduce(xor)
//   }
// }

// function and(bool1, bool2) {
//   return bool1 && bool2
// }

// function or(bool1, bool2) {
//   return bool1 || bool2
// }

// function xor(bool1, bool2) {
//   return bool1 != bool2
// }

// ///////////
// ///////////

// function logicalCalc(array, op) {
//   switch (op) {
//     case 'OR':
//       return array.reduce((a, b) => a || b)
//       break
//     case 'AND':
//       return array.reduce((a, b) => a && b)
//       break
//     case 'XOR':
//       return array.reduce((a, b) => a != b)
//       break
//   }
// }
