let personalInfo = {
  name: "Ellis",
  age: 25,
  address: "123 Main St",
  phone: "555-555-5555",
};

let fruits = ["Banana", "Orange", "Apple", "Mango", personalInfo];

//add to end of the array
fruits.push("Kiwi");

//Remove from end of the array
fruits.pop();

//add to top of the array
fruits.unshift("Lemon");

//Remove from top of the array
fruits.shift();

// console.log(fruits);

//loop array
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

// inbuilt loop methods
// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.map((item, index, array) => {
//   return item * 2;
// });

// const newNumbers = numbers.filter((item, index, array) => {
//   return item > 3;
// })

// const newNumbers = numbers.reduce((prev, item) => {
//   return prev + item;
// }, 0);

// const newNumbers = numbers.some((item, index, array) => {
//   return item > 4;
// })

// const newNumbers = numbers.every((item, index, array) => {
//   return item > 4;
// })

// const newNumbers = numbers.find((item, index, array) => { //find the first item that matches the condition
//   return item > 2;
// })

// console.log(newNumbers);

//Spread Operator and Rest Operator

const nums = [1, 2, 3, 4, 5];
const nums2 = [6, 7, 8, 9, 10];

// const finalNums = [...nums, ...nums2]; //spread operator

// console.log(finalNums);

function sum(...numbers) {
  return numbers;
}

console.log(sum(nums, nums2, "ellis"));
