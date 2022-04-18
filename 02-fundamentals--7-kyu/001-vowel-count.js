// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const getCount = (str) => {
  const newArr = str
    .split('')
    .filter((letter) => ['a', 'e', 'i', 'o', 'u'].indexOf(letter) !== -1)

  return newArr.length
}

console.log(getCount('abracadabra'))

// ALTERNATIVE SOLUTIONS

// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length
// }

// function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = ["a","e","i","o","u"];
//   for(var i = 0;i < str.length;i++){
//     for(var j=0;j<vowels.length;j++){
//       if(str[i] === vowels[j]){
//         vowelsCount++;
//       }
//     }
//   }

//   return vowelsCount;
// }
