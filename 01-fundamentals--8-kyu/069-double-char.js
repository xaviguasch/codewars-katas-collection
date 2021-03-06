// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

const doubleChar = (str) => {
  return str
    .split('')
    .map((char) => char + char)
    .join('')
}

console.log(doubleChar('abcd'))
console.log(doubleChar('Adidas'))
console.log(doubleChar('1234!_ '))

// ALTERNATIVE SOLUTION

// function doubleChar(str) {
//   var word = '';
//   for (var i = 0; i < str.length; i++){
//     word = word + str[i] + str[i];
//   };
//   return word;
// };
