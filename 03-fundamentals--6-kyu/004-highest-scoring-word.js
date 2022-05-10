// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const high = (x) => {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]
    .join('')
    .toLowerCase()
    .split('')

  const wordsArr = x.split(' ')

  const wordObjWinner = wordsArr.reduce(
    (acc, word) => {
      const totalPoints = word.split('').reduce((acc, currV) => {
        const points = alphabet.indexOf(currV) + 1

        return acc + points
      }, 0)

      const wordObj = {}
      wordObj['fullWord'] = word
      wordObj['points'] = totalPoints

      return wordObj['points'] > acc['points'] ? wordObj : acc
    },
    { fullWord: '', points: 0 }
  )

  return wordObjWinner.fullWord
}

console.log(high('man i need a taxi up to ubud'))
console.log(high('what time are we climbing up the volcano'))
console.log(high('take me to semynak'))
console.log(high('aa b'))
console.log(high('b aa'))
