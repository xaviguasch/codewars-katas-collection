// Return the type of the sum of the two arguments

const typeOfSum = (a, b) => {
  const sum = a + b

  return typeof sum
}

// ALTERNATIVE SOLUTION

// const typeOfSum = (a, b) => typeof(a + b);

console.log(typeOfSum(12, 1))
console.log(typeOfSum('d', 1))
console.log(typeOfSum(1, 'a'))
console.log(typeOfSum(true, 1))
console.log(typeOfSum(null, undefined))
