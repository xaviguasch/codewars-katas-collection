// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!

const solve = (arr) => arr.filter((val) => !arr.includes(-val))[0]

console.log(solve([1, -1, 2, -2, 3]))
console.log(solve([-3, 1, 2, 3, -1, -4, -2]))
console.log(solve([1, -1, 2, -2, 3, 3]))
console.log(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]))
console.log(solve([-9, -105, -9, -9, -9, -9, 105]))

// ALTERNATIVE SOLUTIONS

// const solve = array => array.find(value => !array.includes(-value))

// const solve = arr => [...new Set(arr)].reduce((a, c) => a + c);
