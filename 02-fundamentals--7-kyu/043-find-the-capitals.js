// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

const capitals = (word) => {
  return word
    .split('')
    .map((letter) => (letter.toUpperCase() === letter ? word.indexOf(letter) : null))
    .filter((el) => el !== null)
}

console.log(capitals('CodEWaRs'))
