// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

const dominator = (arr) => {
  const objResults = {}

  arr.forEach((el) => {
    if (objResults[el]) {
      objResults[el] += 1
    } else {
      objResults[el] = 1
    }
  })

  for (const num in objResults) {
    if (objResults[num] > arr.length / 2) {
      return Number(num)
    }
  }

  return -1
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]))
console.log(dominator([1, 2, 3, 4, 5]))
console.log(dominator([1, 1, 1, 2, 2, 2]))
console.log(dominator([1, 1, 1, 2, 2, 2, 2]))

// ALTERNATIVE SOLUTIONS

// function dominator(arr) {
//   arr.sort()
//   for (var i = 0, v = 0, c = 0; i < arr.length; i++) {
//     if (v == arr[i]) c++
//     else {
//       v = arr[i]
//       c = 1
//     }
//     if (c > arr.length / 2) return v
//   }
//   return -1
// }

// function dominator(arr) {
//   for (let i = 0, obj = {}; i < arr.length; i++) {
//     obj[arr[i]] = obj[arr[i]] + 1 || 1
//     if (obj[arr[i]] > arr.length / 2) return arr[i]
//   }
//   return -1
// }

// const dominator = (arr) => {
//   let count = {}
//   arr.forEach((el) => {
//     count[el] ? count[el]++ : (count[el] = 1)
//   })
//   for (let k in count) {
//     if (count[k] > arr.length / 2) return +k
//   }
//   return -1
// }

// const dominator = function (arr) {
//   const dic = arr.reduce((a, i) => ((a[i] = a[i] + 1 || 1), a), {})
//   for (const i in dic) {
//     if (dic[i] > arr.length / 2) {
//       return Number(i)
//     }
//   }
//   return -1
// }

// const dominator = (arr) =>
//   ((obj) => arr.find((val) => obj[val] > arr.length / 2) || -1)(
//     arr.reduce((pre, val) => ((pre[val] = -~pre[val]), pre), {})
//   )
