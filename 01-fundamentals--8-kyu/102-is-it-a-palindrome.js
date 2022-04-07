// Write a function that checks if a given string (case insensitive) is a palindrome.

const isPalindrome = (x) =>
  x.toLowerCase().split('').reverse().join('') === x.toLowerCase()

console.log(isPalindrome('a'))
console.log(isPalindrome('aba'))
console.log(isPalindrome('Abba'))
console.log(isPalindrome('hello'))
console.log(isPalindrome('bob'))
