// DESCRIPTION:
// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

const solution = (pairs) => {
  let str = ''

  for (const key in pairs) {
    str += `${key} = ${pairs[key]},`
  }

  const slicedStr = str.slice(0, -1)

  return slicedStr
}

console.log(solution({ a: 1, b: '2' }))

// ALTERNATIVE SOLUTION

// function solution(pairs) {
//   return Object.keys(pairs)
//     .map(function (k) {
//       return k + ' = ' + pairs[k]
//     })
//     .join(',')
// }

// function solution(pairs){
//   var array = [];
//   for (var pair in pairs){
//     array.push((pair+' = '+pairs[pair]));
//   }
//   return array.join(',');
// }

// const solution = pairs =>
//     Object.entries(pairs)
//         .map(([key, value]) => `${key} = ${value}`)
//         .join(',');
