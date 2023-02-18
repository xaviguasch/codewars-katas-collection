// Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given multiplier.

const multiplyAndFilter = (array, multiplier) => {
  return
}

console.log(multiplyAndFilter([1, 2, 3, 4], 1.5))
console.log(multiplyAndFilter([1, 2, 3], 0))
console.log(multiplyAndFilter([0, 0, 0], 2))
console.log(
  multiplyAndFilter([1, null, function () {}, 2.5, 'string', 10, undefined, {}, []], 3)
)
