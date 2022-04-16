// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

const array = (arr) => {
  const newArr = arr.split(',')

  newArr.shift()
  newArr.pop()

  if (newArr.length === 0) {
    return null
  } else {
    return newArr.join(' ')
  }
}

console.log(array('1,2,3'))
console.log(array('1,2,3,4'))
console.log(array('1,2,3,4,5'))
console.log(array(''))
console.log(array('1'))
console.log(array('1,2'))

// ALTERNATIVE SOLUTIONS

// function array(arr) {
//   return arr.split(',').slice(1, -1).join(' ') || null
// }

// function array(arr) {
//   arr = arr.split(',')

//   if (arr.length < 3) {
//     return null
//   }

//   return arr.slice(1, arr.length - 1).join(' ')
// }
