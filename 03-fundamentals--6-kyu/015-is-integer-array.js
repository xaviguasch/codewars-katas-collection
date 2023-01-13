// Write a function with the signature shown below:

// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

function isIntArray(arr) {
  var hasNaN = false

  function isInt(num) {
    return Math.round(num) === num
  }

  if (arr instanceof Array === false) {
    return false
  } else if (arr.length === 0) {
    return true
  }
  for (var i = 0; i < arr.length; i++) {
    if (isInt(arr[i]) === false) {
      hasNaN = true
      break
    }
  }
  if (hasNaN === true) {
    return false
  } else {
    return true
  }
}

console.log(isIntArray([]))
console.log(isIntArray([1, 2, 3, 4]))
console.log(isIntArray([1, 2, 3, NaN]))
