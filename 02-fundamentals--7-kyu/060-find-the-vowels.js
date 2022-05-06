// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

const vowelIndices = (word) => {
  const vocals = ['a', 'e', 'i', 'o', 'u', 'y']

  const resultArr = []

  word
    .toLowerCase()
    .split('')
    .forEach((letter, idx) =>
      vocals.indexOf(letter) !== -1 ? resultArr.push(idx + 1) : null
    )

  return resultArr
}

console.log(vowelIndices('mmm'))
console.log(vowelIndices('apple'))
console.log(vowelIndices('super'))
console.log(vowelIndices('orange'))
