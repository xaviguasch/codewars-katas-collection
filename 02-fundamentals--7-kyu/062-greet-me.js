// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

const greet = (name) => {
  if (name === undefined || name === null) return 'Hello Name!'

  const refinedName =
    name.split('')[0].toUpperCase() + name.split('').slice(1).join('').toLowerCase()

  return `Hello ${refinedName}!`
}

console.log(greet('riley'))

// ALTERNATIVE SOLUTION

// var greet = function(name) {
//   return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
// };

// var greet = function(name) {
//   return "Hello " + name.substring(0,1).toUpperCase() + name.slice(1).toLowerCase()+"!";
// };
