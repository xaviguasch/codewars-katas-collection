// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

const removeRotten = (bagOfFruits) => {
  if (!bagOfFruits) return []

  return bagOfFruits.map((fruit) => {
    if (fruit.includes('rotten')) {
      const [rottenStr, fruitStr] = fruit.split('rotten')
      return fruitStr.toLowerCase()
    } else {
      return fruit
    }
  })
}

console.log(removeRotten(['apple', 'banana', 'kiwi', 'melone', 'orange']))
console.log(removeRotten([]))
console.log(removeRotten(['apple', 'rottenBanana', 'apple']))

// ALTERNATIVE SOLUTIONS
// function removeRotten(arr) {
//   return arr ? arr.map((x) => x.replace('rotten', '').toLowerCase()) : []
// }

// function removeRotten(bagOfFruits) {
//   if (!bagOfFruits) {
//     return []
//   }

//   return bagOfFruits.map(function (fruit) {
//     return fruit.replace('rotten', '').toLowerCase()
//   })
// }

// removeRotten = (a) =>
//   a == null ? [] : a.map((e) => e.replace('rotten', '').toLowerCase())
