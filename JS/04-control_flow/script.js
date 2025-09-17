"use strict";
console.log("Hello, World!");

let age = 17;
let hasATicket = false;

if (!age >= 18 && hasATicket) {
  console.log("Welcome! come in");
} else if (!hasATicket && age >= 18) {
  console.log("Got buy a ticket");
} else {
  console.log("Go home");
}

// Traffic light
let color = "no light";

switch (color) {
  case "yellow":
    console.log("Pay attention...");
    break;
  case "red":
    console.log("Stoooopp!!!");
    break;
  default:
    console.log("Drive!");
    break;
}

// Guess the number - Exercise 1
let number = 8;
let guess = 10;

if (guess === number) {
  console.log("Correct!");
} else if (guess > number) {
  console.log("Too high");
} else if (guess < number) {
  console.log("Too low");
} else {
  console.log("Invalid Number!!!");
}
// Discount - Exercise 2

const totalAmount = 100;
let discount = null;
let totalToPay = null;

if (totalAmount >= 100) {
  discount = totalAmount * 0.2;
  totalToPay = totalAmount - discount;
  console.log(`You get 20% discount. ${discount}$. The total is ${totalToPay}`);
} else if (totalAmount >= 50 && totalAmount <= 99) {
  discount = totalAmount * 0.1;
  totalToPay = totalAmount - discount;
  console.log(`You get 10% discount. ${discount}$. The total is ${totalToPay}`);
} else {
  console.log("Sorry no discount");
}

// Calculating BMI
const myWeight = 90;
const myHeight = 1.83;
const myBMI = myWeight / myHeight ** 2;
console.log(myBMI.toFixed(2));
