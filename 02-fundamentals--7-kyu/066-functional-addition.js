// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

// var addOne = add(1);
// addOne(3); // 4

// var addThree = add(3);
// addThree(3); // 6

const add = (n) => {
  const newFunc = (a) => a + n

  return newFunc
}

// var addOne = add(1)

// console.log(addOne(3))

// var addThree = add(3)
// console.log(addThree(3))

// ALTERNATIVE SOLUTION

// const add = n => x => x + n;
