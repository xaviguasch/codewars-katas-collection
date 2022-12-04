// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

// Example:
// Input:  ["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]
// Output: ["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"]

const ultimateReverse = (s) => {
  const reversedArr = s.join('').split('').reverse()

  const finalArr = []

  for (let i = 0; i < s.length; i++) {
    finalArr.push(reversedArr.splice(0, s[i].length))
  }

  return finalArr.map((innerArr) => innerArr.join(''))
}

console.log(ultimateReverse(['I', 'like', 'big', 'butts', 'and', 'I', 'cannot', 'lie!']))
console.log(
  ultimateReverse([
    '?kn',
    'ipnr',
    'utotst',
    'ra',
    'tsn',
    'iksr',
    'uo',
    'yer',
    'ofebta',
    'eote',
    'vahu',
    'oyodpm',
    'ir',
    'hsyn',
    'amwoH',
  ])
)

// ALTERNATIVE SOLUTION

// function ultimateReverse(words) {
//   let reversed = [...words.join('')].reverse();
//   return words.map(word => reversed.splice(0, word.length).join(''));
// }
