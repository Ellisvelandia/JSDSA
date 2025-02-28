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

// const nums = [1, 2, 3, 4, 5];
// const nums2 = [6, 7, 8, 9, 10];

// const finalNums = [...nums, ...nums2]; //spread operator

// console.log(finalNums);

// function sum(...numbers) {
//   return numbers;
// }

// console.log(sum(nums, nums2, "ellis"));

//concat

// const newArray = nums.concat(nums2); //concat method to merge two arrays into one array.

// console.log(newArray);

//Slice
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// const newArray = fruits.slice(1, 3); //slice method to copy a portion of an array into a new array.
// console.log(newArray);

// const newArray2 = fruits.slice(-2); //slice method to copy a portion of an array into a new array.
// console.log(newArray2);

//splice

// const newArray = fruits.splice(1, 2); //splice method to remove a portion of an array into a new array.
// console.log(newArray);

// const newArray = fruits.splice(-2); //splice method to remove a portion of an array into a new array.
// console.log(newArray);

//fill

// const newArray = nums.fill(0); //fill method to fill an array with a value.
// console.log(newArray);

// const newArray = nums.fill(0, 2, 4); //fill method to fill an array with a value.
// console.log(newArray);

//flat

const flatExample = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

const flattendArray = flatExample.flat(2); //flat method to flatten an array.
console.log(flattendArray);

