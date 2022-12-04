// You are given two arrays arr1 and arr2, where arr2 always contains integers.

// Write the function find_array(arr1, arr2) such that:

// For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] find_array returns ['a', 'a']

// For arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] find_array returns [1, 1, 1]

// For arr1 = [0, 3, 4], arr2 = [2, 6] find_array returns [4]

// For arr1=["a","b","c","d"] , arr2=[2,2,2], find_array returns ["c","c","c"]

// For arr1=["a","b","c","d"], arr2=[3,0,2] find_array returns ["d","a","c"]

// If either arr1 or arr2 is empty, you should return an empty arr (empty list in python, empty vector in c++). Note for c++ use std::vector arr1, arr2.

const findArray = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) {
    return []
  }
  return arr2.map((el) => arr1[el])
}

console.log(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]))
console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]))

console.log(findArray([1, 2, 3], []))
console.log(findArray([], [2, 1, 3]))
console.log(findArray([], []))

// ALTERNATIVE SOLUTIONS

// const findArray = (arr1, arr2) =>
//   arr2.filter((val) => val < arr1.length).map((val) => arr1[val])
