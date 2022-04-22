// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const XO = (str) => {
  const arr = str.split('')

  const arrLower = arr.map((letter) => letter.toLowerCase())

  let exes = []
  let ohs = []

  for (let i = 0; i < arrLower.length; i++) {
    if (arrLower[i] === 'x') {
      exes.push(arrLower[i])
    } else if (arrLower[i] === 'o') {
      ohs.push(arrLower[i])
    }
  }

  return exes.length === ohs.length
}

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xxxm'))
console.log(XO('Oo'))
console.log(XO('ooom'))

// ALTERNATIVE SOLUTIONS

// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }

// const XO = str => {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }
