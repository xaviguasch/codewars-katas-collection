// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

const explode = (x) => {
  let score = 0
  let notNumbers = 0

  const newArr = x.map((el) => {
    if (isNaN(el)) {
      notNumbers++
    } else {
      score += el
    }
    return el
  })

  if (notNumbers === 2) {
    return 'Void!'
  }

  const resultArr = []

  for (let i = 0; i < score; i++) {
    resultArr.push(newArr)
  }

  return resultArr
}

// console.log(explode([9, 3]))
// console.log(explode(['a', 3]))
// console.log(explode([6, 'c']))
// console.log(explode(['a', 'b']))
// console.log(explode(['a', 0]))
