// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

const squareDigits = (num) => {
  const newStr = num
    .toString()
    .split('')
    .map((n) => Math.pow(n, 2))
    .join('')

  return Number(newStr)
}

console.log(squareDigits(3212))
console.log(squareDigits(2112))
console.log(squareDigits(0))
