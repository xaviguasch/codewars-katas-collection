// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

const saleHotDogs = (n) => (n < 5 ? n * 100 : n < 10 ? n * 95 : n >= 10 ? n * 90 : '')

console.log(saleHotDogs(1))
console.log(saleHotDogs(4))
console.log(saleHotDogs(5))
console.log(saleHotDogs(9))
console.log(saleHotDogs(10))
console.log(saleHotDogs(100))

// ALTERNATIVE SOLUTIONS

// function saleHotdogs(n){
//   return n*(n<5?100:n<10?95:90);
// }

// function saleHotdogs(n){
//   var money = 0;
//   if (n < 5 ) {
//     money = n * 100
//   }
//   else if ( n >= 5 && n < 10 ) {
//     money = n * 95
//   }
//   else if ( n >= 10 )  {
//    money = n * 90
//   }
//   return money
// }
