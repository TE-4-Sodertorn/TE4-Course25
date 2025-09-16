console.log("Hello, World!");

let a = 10;
let b = 14;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log(5 !== 5);
console.log(5 >= 4);
console.log(5 <= 4);

console.log(!a > !b || a + 5 > b);

const age = 18;
const hasTicket = false;

if (age >= 18 && hasTicket) {
  console.log("Please come in and enjoy the show");
} else if (age >= 18 && !hasTicket) {
  console.log("Go buy a ticket");
} else {
  console.log("Go home");
}
