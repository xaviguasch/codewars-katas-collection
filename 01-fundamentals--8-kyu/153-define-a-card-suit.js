// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

const defineSuit = (card) => {
  if (card[card.length - 1] === '♣') return 'clubs'
  else if (card[card.length - 1] === '♦') return 'diamonds'
  else if (card[card.length - 1] === '♥') return 'hearts'
  else return 'spades'
}

console.log(defineSuit('3♣'))
console.log(defineSuit('3♦'))
console.log(defineSuit('3♥'))
console.log(defineSuit('3♠'))

// ALTERNATIVE SOLUTIONS

// function defineSuit(card) {
//   const s = {
//     '♣': 'clubs',
//     '♠': 'spades',
//     '♦': 'diamonds',
//     '♥': 'hearts',
//   }
//   return s[card.charAt(card.length - 1)]
// }

// function defineSuit(card) {
//   if (card.includes('♥')) return 'hearts'
//   if (card.includes('♦')) return 'diamonds'
//   if (card.includes('♣')) return 'clubs'
//   if (card.includes('♠')) return 'spades'
// }
