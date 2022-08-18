// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

const isAnagram = (test, original) => {
  return (
    original.toLowerCase().split('').sort().join('') ===
    test.toLowerCase().split('').sort().join('')
  )
}

console.log(isAnagram('foefet', 'toffee'))
console.log(isAnagram('Buckethead', 'DeathCubeK'))
console.log(isAnagram('Twoo', 'WooT'))
console.log(isAnagram('dumble', 'bumble'))
console.log(isAnagram('ound', 'round'))
console.log(isAnagram('apple', 'pale'))

// ALTERNATIVE SOLUTION

// // write the function isAnagram
// function isAnagram(str1, str2){
//   return sortWord(str1) == sortWord(str2);
// }

// function sortWord(word){
//   return word.toLowerCase().split("").sort().join("");
// }
