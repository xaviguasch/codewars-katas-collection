// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

const sayHello = (name, city, state) => {
  const newName = name.join(' ')

  return `Hello, ${newName}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))
console.log(sayHello(['Zendaya'], 'Phoenix', 'Arizona'))

// ALTERNATIVE SOLUTION

// const sayHello = (name, city, state) =>
//   `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
