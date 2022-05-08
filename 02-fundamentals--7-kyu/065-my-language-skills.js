// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

const myLanguages = (results) => {
  const arr = []

  for (const key in results) {
    if (results[key] >= 60) {
      arr.push([key, results[key]])
    }
  }

  const orderedArr = arr.sort((a, b) => b[1] - a[1])

  return orderedArr.map((intArr) => intArr[0])
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }))
console.log(myLanguages({ Hindi: 60, Dutch: 93, Greek: 71 }))

// ALTERNATIVE SOLUTIONS

// function myLanguages(results) {
//   return Object.keys(results)
//     .filter((r) => results[r] > 59)
//     .sort((a, b) => results[b] - results[a])
// }

// const myLanguages = (results) =>
//   Object.entries(results)
//     .filter(([name, points]) => points >= 60)
//     .sort(([name1, points1], [name2, points2]) => points2 - points1)
//     .map(([name, points]) => name)
