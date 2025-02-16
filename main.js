// #suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.
//why this is  a big o ?
//because the time it takes to run the function is directly proportional to the size of the input n.
// The larger the input n, the longer it will take to run the function.
// function addUpTo(n) {
//   let total = 0;
//   //i am new in javascript, can you explain me this for loop i havent idea what is doing
//   //the for loop is a loop that will iterate from 1 to n, and in each iteration it will add the value of i to the total variable
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// console.log(addUpTo(6)); // 21

//why the result its 21?
//because we sum all the numbers from 1 to 6, so 1+2+3+4+5+6 = 21
//explain me the for loop in the function addUpTo
//the for loop is a loop that will iterate from 1 to n, and in each iteration it will add the value of i to the total variable

//second solution

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo(6)); // 21

//explain me the second solution
//the second solution is a more efficient way to calculate the sum of all numbers from 1 up to (and including) some number n.
//why is more efficient?
//because it only needs to calculate the sum once, instead of calculating the sum for each number separately.