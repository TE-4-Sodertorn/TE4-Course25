// * For loop
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration number ${i}`);
}

// * while loop
// let count = 1;
// while (count <= 20) {
//   console.log(`The count is ${count}`);
//   count++;
// }

// * do...while loop
// let number = 1;
// do {
//   console.log(`Code will run at least once ${number}`);
//   number++;
// } while (number <= 6);

// * for..of loop
const items = ["Mango", "Peach", "Apples", "Pineapple", "Watermelon"];
for (const item of items) {
  console.log(`My favorite fruit is ${item} `);
  console.log(item);
}

console.log(items[3]);
items[3] = "Blueberry";
console.log(items);

// ! Exercises

// > first thing
for (let number = 1; number <= 10; number++) {
  console.log(`Number is ${number}`);
}

// > second thing
let index = 10;
while (index >= 1) {
  console.log(`Index is ${index} `);
  index--;
}

// > third thing
let sum = null;
let number = 1;

do {
  sum = sum + number;
  console.log(`Sum is ${sum}`);
} while (sum <= 20);

// > fourth thing
const fruits = ["Mango", "Peach", "Apples", "Pineapple", "Watermelon"];
for (const item of items) {
  console.log(`My favorite fruit is ${item} `);
}
