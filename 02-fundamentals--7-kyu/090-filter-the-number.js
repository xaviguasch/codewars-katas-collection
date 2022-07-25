// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

const FilterString = (value) => {
  const string = value
    .split('')
    .map((char) => Number(char))
    .filter((el) => !isNaN(el))
    .join('')

  return Number(string)
}

console.log(FilterString('123'))
console.log(FilterString('a1b2c3'))
console.log(FilterString('aa1bb2cc3dd'))
