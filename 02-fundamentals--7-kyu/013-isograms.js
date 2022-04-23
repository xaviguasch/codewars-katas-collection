// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

const isIsogram = (str) => {
  const arr = str.toLowerCase().split('')

  const letterObj = {}

  arr.forEach((letter) => {
    if (!letterObj[letter]) {
      letterObj[letter] = 1
    } else {
      letterObj[letter] = null
    }
  })

  for (const key in letterObj) {
    if (letterObj[key] === null) {
      return false
    }
  }

  return true
}

console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('isogram'))
console.log(isIsogram('aba'))
console.log(isIsogram('moOse'))
console.log(isIsogram('isIsogram'))
console.log(isIsogram(''))
