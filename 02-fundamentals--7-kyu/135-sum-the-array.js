// Your job is to add a method 'sum' to all array objects, which sums all the numbers in it. You should return 0 if the array is empty.

// For example:

// var arr = [1,2,3,4];
// arr.sum();  //returns 10

// var arr = [10, 28, 14, 33];
// arr.sum(); //returns 85
Array.prototype.sum = function () {
  return this.reduce((acc, currV) => acc + currV, 0)
}

var arr = [1, 2, 3, 4]
arr.sum() //returns 10

console.log(arr.sum())
