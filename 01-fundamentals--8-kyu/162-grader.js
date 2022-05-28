// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"
// Examples:

// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"

const grader = (score) => {
  if (score > 1) {
    return 'F'
  } else if (score >= 0.9) {
    return 'A'
  } else if (score >= 0.8) {
    return 'B'
  } else if (score >= 0.7) {
    return 'C'
  } else if (score >= 0.6) {
    return 'D'
  } else {
    return 'F'
  }
}

// ALTERNATIVE SOLUTION
// const grader = score =>
//   score < 0.6 || score > 1 ? `F` : score < 0.7 ? `D` : score < 0.8 ? `C` : score < 0.9 ? `B` : `A`;

console.log(grader(1.1))
console.log(grader(0))
console.log(grader(0.9))
console.log(grader(0.8))
console.log(grader(0.7))
console.log(grader(0.6))
