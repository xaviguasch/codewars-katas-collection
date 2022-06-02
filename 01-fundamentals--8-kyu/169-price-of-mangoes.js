// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

const mango = (quantity, price) =>
  Math.floor(quantity / 3) * (price * 2) + (quantity % 3) * price

console.log(mango(3, 3))
console.log(mango(9, 5))
console.log(mango(10, 5))

// ALTERNATIVE SOLUTIONS

// function mango(quantity, price) {
//   return price * (quantity - Math.floor(quantity / 3))
// }

// function mango(quantity, price){
//   var divider = Math.floor(quantity / 3);
//   var remainder = quantity % 3;
//   var totalCost = ((divider * 2) * price) + (remainder * price);
//   return totalCost;
//   }
