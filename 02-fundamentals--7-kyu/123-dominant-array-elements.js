// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All numbers will be greater than 0.
// More examples in the test cases.

// Good luck!

const solve = (arr) => {
  return arr.filter((el, idx, origArr) => {
    const newRightArr = origArr.slice(idx + 1)

    return newRightArr.every((newEl) => el > newEl) ? el : null
  })
}

console.log(solve([16, 17, 14, 3, 14, 5, 2]))
console.log(solve([92, 52, 93, 31, 89, 87, 77, 105]))
console.log(solve([75, 47, 42, 56, 13, 55]))
console.log(solve([67, 54, 27, 85, 66, 88, 31, 24, 49]))
