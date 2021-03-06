// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false

const isPalindrome = (line) =>
  line.toString().split('').reverse().join('') === line.toString()

console.log(isPalindrome('anna'))
console.log(isPalindrome('walter'))
console.log(isPalindrome(12321))
console.log(isPalindrome(123456))
