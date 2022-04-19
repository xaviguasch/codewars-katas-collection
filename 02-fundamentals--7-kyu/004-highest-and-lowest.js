// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

const highAndLow = (numbers) => {
  const numbersArr = numbers.split(' ').map((num) => Number(num))

  const max = Math.max(...numbersArr)
  const min = Math.min(...numbersArr)

  return `${max} ${min}`
}

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))
console.log(highAndLow('1 2 3'))

// ALTERNATIVE SOLUTIONS

// function highAndLow(numbers){
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }

// function highAndLow(numbers){
//   var arr = numbers.split(' ').sort(function(a, b) { return a - b });
//   return arr[arr.length -1] + ' ' + arr[0];
// }
