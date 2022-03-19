// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  const arr = str.split('')

  let reversedStr = ''

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedStr += arr[i]
  }

  return reversedStr
}

console.log(solution('world'))

// Alternative solution

// function solution(str){
//   return str.split('').reverse().join('');
// }
