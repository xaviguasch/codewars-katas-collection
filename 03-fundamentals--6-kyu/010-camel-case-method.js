// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase = function () {
  return this.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

console.log('test case'.camelCase())
console.log('camel case method'.camelCase())
console.log('say hello'.camelCase())
console.log(''.camelCase())

// ALTERNATIVE SOLUTION

// String.prototype.camelCase = function () {
//   return this.split(' ')
//     .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1))
//     .join('')
// }

// String.prototype.camelCase=function(){
//   const capitalize = (word) => {
//     return word.slice(0,1).toUpperCase() + word.slice(1)
//   }

//   return this
//     .split(' ')
//     .map(capitalize)
//     .join('')
// }

// String.prototype.camelCase = function() {
//   if (typeof this !== 'string' || !this.length) return '';

//   return this
//     .trim()
//     .split(' ')
//     .map(w => `${w[0].toUpperCase()}${w.toLowerCase().slice(1)}`)
//     .join('');
// }
