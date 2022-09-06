// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

function sequenceSum(count) {
  let sum = 0

  for (let i = 0; i <= count; i++) {
    console.log(i)
    sum += i
  }

  return sum
}

console.log(sequenceSum(6))
