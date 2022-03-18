// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = (str) => {
  const newArr = str.split('')
  newArr.pop()
  newArr.shift()

  return newArr.join('')
}

console.log(removeChar('amigo'))

// Alternative more efficient solution:

// function removeChar(str) {
//   return str.slice(1, -1);
// }
