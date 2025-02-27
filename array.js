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

console.log(fruits);
