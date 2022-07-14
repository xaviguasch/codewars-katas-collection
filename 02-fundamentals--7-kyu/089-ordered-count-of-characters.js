// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = (text) => {
  const letters = text.split('')

  const uniqs = letters.filter((letter, index) => letters.indexOf(letter) === index)

  return uniqs.map((letter) => [letter, text.split(letter).length - 1])
}

console.log(orderedCount('abracadabra'))
console.log(orderedCount('Code Wars'))
console.log(orderedCount('233312'))
