// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

const whatDay = (num) => {
  const daysArr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  return daysArr[num - 1]
    ? daysArr[num - 1]
    : 'Wrong, please enter a number between 1 and 7'
}

console.log(whatDay(1))
console.log(whatDay(2))
console.log(whatDay(3))
console.log(whatDay(8))
console.log(whatDay(20))
