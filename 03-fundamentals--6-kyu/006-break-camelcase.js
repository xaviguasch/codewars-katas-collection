// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const solution = (string) => {
  const arrOfLetters = string.split('')

  let upperCaseIdxArr = []

  arrOfLetters.map((l, idx) => {
    if (l === l.toUpperCase()) {
      upperCaseIdxArr.push(idx)
    }

    return l
  })

  if (upperCaseIdxArr.length !== 0) {
    // newIdx is added because with each iteration we make the array longer
    upperCaseIdxArr.forEach((idx, newIdx) => arrOfLetters.splice(idx + newIdx, 0, ' '))
  }

  return arrOfLetters.join('')
}

console.log(solution('camelCasing'))
console.log(solution('camelCasingTest'))
console.log(solution('identifier'))
console.log(solution(''))
console.log(solution('bigManInCampus'))

// ALTERNATIVE SOLUTIONS

// function solution(string) {
//   string = string.split('').map(function (el) {
//     if (el === el.toUpperCase()) {
//       el = ' ' + el
//     }
//     return el
//   })
//   return string.join('')
// }

// const solution = (string) => {
//   return [...string]
//     .map((char) => {
//       return char === char.toUpperCase() ? ` ${char}` : char
//     })
//     .join('')
// }
