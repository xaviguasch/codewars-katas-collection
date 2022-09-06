// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

const divCon = (x) => {
  let sumNumIntegers = 0
  let sumStringIntegers = 0
  x.forEach((num) => {
    if (Number.isInteger(num)) {
      sumNumIntegers += num
    } else {
      sumStringIntegers += Number(num)
    }
  })

  return sumNumIntegers - sumStringIntegers
}

console.log(divCon([9, 3, '7', '3']))
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']))

// ALTERNATE SOLUTION

function divCon(x) {
  return x.reduce(
    (acc, cur) => (typeof cur === 'number' ? acc + cur : acc - Number(cur)),
    0
  )
}
