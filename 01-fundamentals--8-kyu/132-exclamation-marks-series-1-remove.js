// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

const remove = (string) => {
  let newArr = string.split('')

  if (newArr[newArr.length - 1] === '!') {
    newArr.splice(newArr.length - 1)
    return newArr.join('')
  } else {
    return string
  }
}

console.log(remove('Hi!'))
console.log(remove('Hi!!!'))
console.log(remove('!Hi'))
console.log(remove('!Hi!'))
console.log(remove('Hi! Hi!'))
console.log(remove('Hi'))

// ALTERNATIVE SOLUTIONS

// const remove = s => s.replace(/!$/, '');

// function remove(s) {
//   return s.endsWith('!') ? s.slice(0, -1) : s;
// }
