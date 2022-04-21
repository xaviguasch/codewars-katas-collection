// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = (s) => {
  const arr = s.split('')

  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    const letterLower = arr[i].toLowerCase()
    const letterUpper = letterLower.toUpperCase()

    newArr.push(letterUpper + letterLower.repeat(i))
  }

  return newArr.join('-')
}

console.log(accum('ZpglnRxqenU'))
console.log(accum('NyffsGeyylB'))

// ALTERNATIVE SOLUTION

// function accum(s) {
//   return s
//     .split('')
//     .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
//     .join('-')
// }
