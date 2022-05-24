// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

const solve = (arr) => {
  const alphabet = [
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

  return arr.map((word) => {
    const wordArr = word.toLowerCase().split('')

    let positionSym = 0

    for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i] === alphabet[i]) {
        positionSym++
      }
    }

    return positionSym
  })
}

console.log(solve(['abode', 'ABc', 'xyzD']))
console.log(solve(['abide', 'ABc', 'xyz']))
console.log(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc']))
console.log(solve(['encode', 'abc', 'xyzD', 'ABmD']))
