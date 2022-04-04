// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

const twoSort = (s) => {
  const firstWord = s.sort()[0]
  const splittedFirstWord = firstWord.split('')

  let finalWordArr = []

  for (let i = 0; i < splittedFirstWord.length; i++) {
    finalWordArr.push(splittedFirstWord[i])

    if (i < splittedFirstWord.length - 1) {
      finalWordArr.push('***')
    }
  }

  return finalWordArr.join('')
}

console.log(
  twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps'])
)

console.log(
  twoSort([
    'turns',
    'out',
    'random',
    'test',
    'cases',
    'are',
    'easier',
    'than',
    'writing',
    'out',
    'basic',
    'ones',
  ])
)

// ALTERNATIVE SOLUTION

// twoSort = s => s.sort()[0].split('').join('***')
