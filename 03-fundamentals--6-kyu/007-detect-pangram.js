// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation

const isPangram = (string) => {
  const alphabetArr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  const alphabetObj = {}

  for (const letter of alphabetArr) {
    alphabetObj[letter] = 0
  }

  string
    .toLowerCase()
    .split('')
    .forEach((l) => {
      if (alphabetObj.hasOwnProperty(l)) {
        alphabetObj[l] += 1
      } else {
      }
    })

  for (const key in alphabetObj) {
    if (alphabetObj[key] === 0) {
      return false
    }
  }

  return true
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
console.log(isPangram('This is not a pangram.'))
