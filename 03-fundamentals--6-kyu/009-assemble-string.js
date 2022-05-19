// In this task, you need to restore a string from a list of its copies.

// You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").

// You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.

// If the array is empty, then return an empty string.

// Examples:
// input = [
//   "a*cde",
//   "*bcde",
//   "abc*e"
// ]
// result = "abcde"

// input = [
//   "a*c**",
//   "**cd*",
//   "a*cd*"
// ]
// result = "a#cd#"

const assembleString = (array) => {
  let result = []

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (i === 0) result.push(array[i][j])
      if (result[j] == '*' || array[i][j] !== '*') result[j] = array[i][j]
    }
  }

  return result.map((x) => (x == '*' ? '#' : x)).join('')
}

console.log(assembleString(['H*llo, W*rld!', 'Hel*o, *or*d!', '*ello* World*']))
console.log(
  assembleString([
    ".** . .' .'' ! ! .",
    ". . . .' **' ! * .",
    "* . .*.* .'' * ! .",
    ". . .*.' .**** ! .",
    "**. * .* .*' ! ! .",
  ])
)
console.log(assembleString(['. . . .', '. . . .', '. . . .', '. . . .', '. . . .']))
console.log(
  assembleString([
    '12***6789',
    '**3456789',
    '12345**8*',
    '***456**9',
    '1*3*5*7*9',
    '*2*456789',
  ])
)
console.log(assembleString(['******', '******', '******', '******']))
console.log(
  assembleString([
    '*#*#*#*#*#*#*#*',
    '*#*#*#*#*#*#*#*',
    '*#*#*#*#*#*#*#*',
    '*#*#*#*#*#*#*#*',
  ])
)

// ALTERNATIVE SOLUTIONS

// function assembleString(array) {
//   return !array.length
//     ? ''
//     : [...array[0]].map((x, i) => {
//         let s = array.find((y) => y[i] != '*')
//         return !s ? '#' : s[i]
//       }).join``
// }

// const assembleString = (a) => {
//   return [...Array((a[0] || []).length).keys()]
//     .map((i) => a.map((s) => s[i]).filter((c) => c != '*')[0] || '#')
//     .join('')
// }

// function assembleString(array) {
//   // check to see if array has elements or is different than undefined
//   if (array.length == 0) {
//     array = ['']
//   }

//   // creates a list of the letters of the first element in the array
//   let x = array[0].split('')

//   // loops through all elements of the array checking for the * char on each position and replacing it
//   // if it exists
//   let result = array.map((e) => {
//     for (let i = 0; i < e.length; i++) {
//       if (x[i] == '*' && e[i] !== '*') {
//         // replace x element at i position with e element at i position
//         x[i] = e[i]
//       }
//     }
//   })

//   // if the final list still contains * changes the * to the #
//   let answer = x.map((e) => {
//     if (e == '*') {
//       e = '#'
//     }
//     return e
//   })

//   // turns final list into string
//   answer = answer.join('')

//   return answer
// }

// const assembleString = (arr) => {
//   const result = []

//   arr.map((str) => {
//     str.split('').map((char, i) => (result[i] = char === '*' ? result[i] || '#' : char))
//   })

//   return result.join('')
// }
