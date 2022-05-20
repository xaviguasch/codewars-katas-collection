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
