// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

const fizzbuzz = (n) => {
  const resultArr = []

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArr.push('FizzBuzz')
    } else if (i % 3 === 0) {
      resultArr.push('Fizz')
    } else if (i % 5 === 0) {
      resultArr.push('Buzz')
    } else {
      resultArr.push(i)
    }
  }

  return resultArr
}

console.log(fizzbuzz(3))
console.log(fizzbuzz(10))

// ALTERNATIVE SOLUTION

// Return an array.
// function fizzbuzz(n) {
//   var fizzified = []
//   for (var i = 1; i <= n; i++) {
//     var val = ''
//     if (i % 3 == 0) val += 'Fizz'
//     if (i % 5 == 0) val += 'Buzz'
//     fizzified.push(val || i)
//   }
//   return fizzified
// }
