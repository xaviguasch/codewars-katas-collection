// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

const combat = (health, damage) => (health - damage >= 0 ? health - damage : 0)

console.log(combat(100, 5))
console.log(combat(92, 8))
console.log(combat(20, 30))

// ALTERNATIVE SOLUTIONS

// function combat(health, damage) {
//   return health < damage ? 0 : health - damage
// }

// const combat = (health, damage) => Math.max(0, health - damage);
