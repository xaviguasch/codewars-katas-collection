// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// PERSONAL NOTE (NOT IN THE ORIGINAL KATA)
// It can be triangle only if sum of any two sides is larger than the third one. Somehow I can't see anything difficult in this.

const isTriangle = (a, b, c) => {
  const sum = a + b + c
  const maxSide = Math.max(a, b, c)

  return sum - maxSide > maxSide
}

console.log(isTriangle(1, 2, 2))
console.log(isTriangle(7, 2, 2))
