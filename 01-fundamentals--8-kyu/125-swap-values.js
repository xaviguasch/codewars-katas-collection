// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

function swapValues() {
  var args = Array.prototype.slice.call(arguments)

  var temp = args[0][0]
  args[0][0] = args[0][1]

  args[0][1] = temp

  return args[0]
}

console.log(swapValues([0, 1]))
console.log(swapValues([1, 1]))
console.log(swapValues([2, 9]))

// ALTERNATIVE SOLUTIONS

// function swapValues() {
//   return arguments[0].reverse()
// }

// function swapValues(args) {
//   var temp = args[0]
//   args[0] = args[1]
//   args[1] = temp
// }

// function swapValues() {
//   var args = Array.prototype.slice.call(arguments)[0]
//   var temp = args[0]
//   args[0] = args[1]
//   args[1] = temp
// }
