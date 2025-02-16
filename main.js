// #suppose we warn to write a function that calculates the sum of all numbers from 1 up yo (and including) some number n.
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(6)); // 21
