console.log("Hello, World!");
const fruits = ["Mango", "Watermelon", "Guava", "Blueberry"];
// fruits.push("Mango");
// fruits.push("Watermelon");
// fruits.push("Guava");
// fruits.unshift("Blueberry");
// fruits.shift();

console.log(fruits[2]);

// for (let i = 0; i < fruits.length; i++) {
//   console.log("Fruit number is: " + fruits[i]);
// }

for (const fruit of fruits) {
  console.log(`My Favorite fruit is ${fruit}`);
}

console.log(fruits.length);

// * Exercise 1

const colors = ["green", "purple", "red"];

// a
console.log(colors[0]);
console.log(colors[2]);

// b
colors.push("pink");
console.log(colors);

// c
colors.shift();
console.log(colors);

// * Exercise 2
const numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1, 99);
console.log(numbers);

for (const number of numbers) {
  console.log(number * 2);
}

const shoppingCart = ["Milk", "eggs", "apples", "beer", "vodka"];
shoppingCart.unshift("redbull");
console.log(shoppingCart);
shoppingCart.push("bread");
console.log(shoppingCart);
shoppingCart.splice(3, 1);
console.log(shoppingCart);
console.log(shoppingCart.includes("Milk"));
console.log(shoppingCart);
