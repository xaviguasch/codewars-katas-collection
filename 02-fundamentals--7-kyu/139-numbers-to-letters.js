// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

const switcher = (x) => {
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

  const reversedAlphabet = alphabet.reverse()

  const numbers = x.map((n) => Number(n))

  const finalArr = numbers.map((num) => {
    if (num === 27) {
      return '!'
    } else if (num === 28) {
      return '?'
    } else if (num === 29) {
      const emptyStr = ' '
      return emptyStr
    } else {
      return alphabet[num - 1]
    }
  })

  return finalArr.join('')
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))
console.log(
  switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4'])
)
console.log(switcher(['4', '24']))

// ALTERNATIVE SOLUTIONS

// const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
// const switcher = x => x.map(item => alpha[item]).join('')

// const switcher=x=>x.reduce((a,b)=>a+" ?!abcdefghijklmnopqrstuvwxyz"[29-b],"")
