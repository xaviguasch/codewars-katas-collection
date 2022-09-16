// DESCRIPTION:
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

// As you can see, the lists are cascading; ie, they overlap, but never out of order.

const eachCons = (array, n) => {
  return array
    .map((num, idx) => array.slice(idx, idx + n))
    .filter((arr) => arr.length === n)
}

const lst = [3, 5, 8, 13]

console.log(eachCons(lst, 1))
console.log(eachCons(lst, 2))
console.log(eachCons(lst, 3))
console.log(eachCons([], 3))
