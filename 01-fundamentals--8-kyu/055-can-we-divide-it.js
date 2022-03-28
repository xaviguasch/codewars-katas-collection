// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// A few cases:

// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

const isDividedBy = (number, a, b) => {
  const first = Math.abs(number) % Math.abs(a)
  const second = Math.abs(number) % Math.abs(b)

  return first === 0 && second === 0 ? true : false
}

console.log(isDividedBy(-12, 2, -6))
console.log(isDividedBy(-12, 2, -5))
console.log(isDividedBy(45, 1, 6))
console.log(isDividedBy(45, 5, 15))
