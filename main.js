// #suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.
//why this is  a big o ?
//because the time it takes to run the function is directly proportional to the size of the input n.
// The larger the input n, the longer it will take to run the function.

//first solution

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

// function addUpTo(n) {
//   return (n * (n + 1)) / 2;
// }

// console.log(addUpTo(6)); // 21

//explain me the second solution
//the second solution is a more efficient way to calculate the sum of all numbers from 1 up to (and including) some number n.
//why is more efficient?
//because it only needs to calculate the sum once, instead of calculating the sum for each number separately.

//which is one is better?
//the first solution is more readable, but the second solution is more efficient.
//the more faste ?
//the second solution is faster because it only needs to calculate the sum once, instead of calculating the sum for each number separately.

// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

//help to develop my logic
//you can improve your logic by practicing more problems and trying to solve them in different ways.
//what is the best way to improve my logic?
//the best way to improve my logic is to practice more problems and try to solve them in different ways.
//how can i improve my logic?

//lets try to solve a problem for improve my logic give the steps to follow but no the code
//1. understand the problem
//2. break the problem into smaller parts
//3. solve the smaller parts
//4. combine the smaller parts to solve the problem
//5. test the solution with different test cases

//provide me some idea or small project to improve my logic also i dont feel ready to solve big problems or easy cuz i am new in javascript

//give steps to follow to solve a problem but create a small project and give me the steps to follow to solve the problem

//#suppose we want to write a rock paper scissors game.
//walk me through the code and explain what each part does
//first we need to get the user choice
//provide some example for make the input in console

//then we need to compare the choices and determine the winner
//how i can use a function to do this?
//provide some example for use a function to do this

function play_game(choice, computer_choice) {
  //explain what i need to do into the function
  //first we need to compare the choices and determine the winner
  if (choice == computer_choice) {
    print("It's a tie!");
  } else if (choice == "rock") {
    print("You win!");
  } else if (choice == "paper") {
    print("You lose!");
  }
  //then we need to print the result
}
//there is a error in choice
//how i can fix the error?
//how i can use the function to play the game?
//provide some example for use the function to play the game

alert("Thanks for playing!");

//Aritmetic operators
// + - * / % ++ --
//explain me the aritmetic operators
//the aritmetic operators are used to perform mathematical operations on numbers.
//the + operator is used to add two numbers together.
//the - operator is used to subtract one number from another.
//the * operator is used to multiply two numbers together.
//the / operator is used to divide one number by another.
//the % operator is used to return the remainder of a division.
//the ++ operator is used to increment a number by one.
//the -- operator is used to decrement a number by one.

//logical operators
// && || !
//explain me the logical operators
//the logical operators are used to combine two or more conditions and return a boolean value.
//the && operator is used to combine two conditions and return true if both conditions are true.
//the || operator is used to combine two conditions and return true if either condition is true.
//the ! operator is used to negate a condition and return the opposite boolean value.

//comparison operators
// == === != !== > < >= <=
//explain me the comparison operators
//the comparison operators are used to compare two values and return a boolean value.
//the == operator is used to compare two values and return true if they are equal.
//the === operator is used to compare two values and return true if they are equal and of the same type.
//the != operator is used to compare two values and return true if they are not equal.
//the !== operator is used to compare two values and return true if they are not equal or of different types.
//the > operator is used to compare two values and return true if the first value is greater than the second value.
//the < operator is used to compare two values and return true if the first value is less than the second value.
//the >= operator is used to compare two values and return true if the first value is greater than or equal to the second value.
//the <= operator is used to compare two values and return true if the first value is less than or equal to the second value.

//ternary operator
//explain me the ternary operator
//the ternary operator is used to return a value based on a condition.
//the condition is evaluated and if it is true, the first value is returned, otherwise the second value is returned.
//it is a shorthand way of writing an if-else statement.  
