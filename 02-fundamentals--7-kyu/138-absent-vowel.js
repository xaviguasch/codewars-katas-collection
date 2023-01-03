// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

const absentVowel = (x) => {
  var vowels = 'aeiou'
  // loop through the vowels
  // make them lowercase (as there may be uppercase in the string)
  // find the index of the vowels and subtract 1.
  // this will find the zero indexed number.
  // return that number.
  for (let i = 0; i <= vowels.length; i++) {
    if (x.toLowerCase().indexOf(vowels[i]) == -1) {
      return Number(i)
    }
  }
}

console.log(absentVowel('John Doe hs seven red pples under his bsket'))
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles'))

// ALTERNATIVE SOLUTIONS

// const absentVowel = (string) =>
//   [...'aeiou'].findIndex((letter) => !string.includes(letter))

// function absentVowel(x) {
//   return ['a', 'e', 'i', 'o', 'u'].findIndex((v) => !x.includes(v))
// }

// const absentVowel = x => {
//   for(var v in 'aeiou')
//     if(x.indexOf('aeiou'[v])==-1)
//       return +v
// }
