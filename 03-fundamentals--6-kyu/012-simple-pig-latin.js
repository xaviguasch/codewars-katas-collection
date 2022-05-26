// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = (str) => {
  return str
    .split(' ')
    .map((word) => {
      if (/([a-zA-Z])/.test(word)) {
        const firstLetter = word[0]

        return word.slice(1) + firstLetter + 'ay'
      } else {
        return word
      }
    })
    .join(' ')
}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This is my string'))
console.log(pigIt('Hello world !'))

// ALTERNATIVE SOLUTION

// function pigIt(str) {
//   return str.replace(/\w+/g, (w) => {
//     return w.slice(1) + w[0] + 'ay'
//   })
// }
