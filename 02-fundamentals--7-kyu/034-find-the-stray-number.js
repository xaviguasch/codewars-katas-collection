// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

const stray = (numbers) => {
  let groupOne = [numbers[0]]
  let groupTwo = []

  // We start at index 1 cause index 0 is already inside groupOne
  for (let i = 1; i < numbers.length; i++) {
    numbers[i] === groupOne[0] ? groupOne.push(numbers[i]) : groupTwo.push(numbers[i])
  }

  console.log(groupOne)
  console.log(groupTwo)

  if (groupOne.length > 1) {
    return groupTwo[0]
  } else {
    return groupOne[0]
  }
}

console.log(stray([1, 2, 2]))
console.log(stray([17, 17, 3, 17, 17, 17, 17]))

// ALTERNATIVE SOLUTIONS

// function stray(numbers){
//   for (var i in numbers){
//      if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
//   }
// }

// function stray(numbers) {
//   var a = numbers.sort();

//   if(a[0] != a[1]) {
//     return a[0]
//   }
//   return a[a.length-1]
// }

// function stray(nums){
//   let max = Math.max(...nums);
//   let min = Math.min(...nums);
//   return nums.filter(x => x == max).length == 1 ? max : min
// }
