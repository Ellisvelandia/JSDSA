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

// const flatExample = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

// const flattendArray = flatExample.flat(2); //flat method to flatten an array.
// console.log(flattendArray);


const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
  "Swift",
  "Go",
  "Kotlin",
];

// const programingReverse = programmingLanguages.reverse(); //reverse method to reverse an array.
// console.log(programingReverse);

// const programmingSort = programmingLanguages.sort( (a, b) => a.localeCompare(b)); //sort method to sort an array.
// console.log(programmingSort);

// const programmingJoin = programmingLanguages.join(" - "); //join method to join an array.
// console.log(programmingJoin);

//problem1: Find the smallest number in an array.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// //Create a function that will find the small number in an array.

// function findSmallestNumber(arr) {
//   //Create a variable to store the smallest number we've seen.
//   let smallest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let currentNumber = arr[i];
//     if (currentNumber < smallest) {
//       smallest = currentNumber;
//     }
//   }
//   return smallest;
// }

// console.log(findSmallestNumber(numbers));

//Create a function that will find the largest number in an array.

// function findLargestNumber(arr) {
//   //Create a variable to store the largest number we've seen.
//   let largest = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     let currentNumber = arr[i];
//     if (currentNumber > largest) {
//       largest = currentNumber;
//     }
//   }
//   return largest;
// }

// console.log(findLargestNumber(numbers));

// function countEvenNumbers(arr) {
//   let eventCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let currentNumber = arr[i];
//     if (currentNumber % 2 === 0) {
//       eventCount = eventCount + 1;
//     }
//   }
//   return eventCount;
// }

// console.log(countEvenNumbers(numbers));

//problem find if a number exists in an array.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const searchNumber = 7;

// function findNumber(arr, numberToFind) {
//   //verify inputs
//   console.log("🔍 Let me check what I'm working with:");
//   console.log("→ My array is:", arr);
//   console.log("→ I'm looking for:", numberToFind);

//   //check for obvious problems
//   if (arr.length === 0) {
//     console.log("❌ Oops! The array is empty!");
//     return false;
//   }

//   //solve the problem in tiny steps
//   console.log("👀 Let me look at each number one by one:");

//   for (let i = 0; i < arr.length; i++) {
//     let currentNumber = arr[i];

//     console.log(`   Looking at position ${i}: The number is ${currentNumber}`);

//     if (currentNumber === numberToFind) {
//       console.log(`✅ Found ${numberToFind} at position ${i}!`);
//       return true;
//     }
    
//   }
//   console.log(`❌ Sorry, couldn't find ${numberToFind} in the array`);
//   return false;
// }

// console.log(findNumber(numbers, searchNumber));


// Let's make a silly pizza order validator!
function checkPizzaOrder(toppings, size, isStuffedCrust) {
    // STEP 1: ANNOUNCE OURSELVES DRAMATICALLY
    console.log("🍕 WELCOME TO THE PIZZA POLICE DEPARTMENT 🚨");
    console.log("⭐ Investigating your pizza order with utmost seriousness...");

    // STEP 2: CHECK THE EVIDENCE
    console.log("\n🔍 EXAMINING THE SUSPECT (I mean, pizza):");
    console.log(`   Size: ${size}`);
    console.log(`   Toppings: ${toppings}`);
    console.log(`   Stuffed Crust: ${isStuffedCrust ? "YES!" : "Nope"}`);

    // STEP 3: INVESTIGATE EACH ASPECT
    let violations = [];

    // Check Size
    if (!size) {
        violations.push("📏 SIZE VIOLATION: You forgot to specify a size! What is this, a pizza for ants?");
    }

    // Check Toppings
    if (!toppings || toppings.length === 0) {
        violations.push("🧀 TOPPING VIOLATION: A naked pizza? That's just sad bread!");
    }

    // The Pineapple Investigation
    if (toppings.includes("pineapple")) {
        console.log("🍍 !!! PINEAPPLE DETECTED !!! Launching special investigation...");
        console.log("   * Checking international pizza laws...");
        console.log("   * Consulting with Italian grandmothers...");
        console.log("   * Result: It's controversial, but we'll allow it 😅");
    }

    // Too Many Toppings Protocol
    if (toppings.length > 5) {
        violations.push("⚠️ OVERLOAD ALERT: More than 5 toppings? Your pizza needs a weight limit sign!");
    }

    // STEP 4: DELIVER THE VERDICT
    console.log("\n👨‍⚖️ PIZZA COURT VERDICT:");
    
    if (violations.length === 0) {
        console.log("✅ CONGRATULATIONS! Your pizza is legally perfect!");
        console.log("   * Pizza License issued!");
        console.log("   * You may proceed to deliciousness!");
        return true;
    } else {
        console.log("❌ VIOLATIONS DETECTED!");
        violations.forEach(violation => console.log(violation));
        console.log("\n👮 Please fix these issues or face pizza jail!");
        return false;
    }
}

// Let's test some pizza orders!
console.log("\n=== Test Case 1: The Good Pizza ===");
checkPizzaOrder(["cheese", "pepperoni", "mushrooms"], "large", true);

console.log("\n=== Test Case 2: The Criminal Pizza ===");
checkPizzaOrder([], "small", false);

console.log("\n=== Test Case 3: The Controversial Pizza ===");
checkPizzaOrder(["cheese", "pineapple", "ham"], "medium", true);

console.log("\n=== Test Case 4: The Excessive Pizza ===");
checkPizzaOrder(
    ["cheese", "pepperoni", "mushrooms", "olives", "onions", "peppers", "anchovies"],
    "large",
    true
);

// Bonus: Pizza Order Generator
function generateRandomPizza() {
    const possibleToppings = ["cheese", "pepperoni", "mushrooms", "pineapple", "olives", "anchovies"];
    const sizes = ["small", "medium", "large", "ABSOLUTELY MASSIVE"];
    
    const randomToppings = possibleToppings
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(Math.random() * 4) + 1);
    
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    const randomCrust = Math.random() > 0.5;

    console.log("\n🎲 RANDOM PIZZA GENERATOR 🎲");
    return checkPizzaOrder(randomToppings, randomSize, randomCrust);
}

// Generate a random pizza order!
console.log("\n=== SURPRISE PIZZA ===");
generateRandomPizza();
