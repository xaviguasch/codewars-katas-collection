// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

const disemvowel = (str) => {
  const arrOfLetters = str.split('')

  const filteredArrOfLetters = arrOfLetters.filter((letter) => {
    if (letter === letter.toUpperCase()) {
      if (['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) === -1) {
        return letter.toUpperCase()
      }
    } else {
      if (['a', 'e', 'i', 'o', 'u'].indexOf(letter) === -1) {
        return letter
      }
    }
  })

  return filteredArrOfLetters.join('')
}

console.log(disemvowel('This website is for losers LOL!'))
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
console.log(disemvowel('What are you, a communist?'))
