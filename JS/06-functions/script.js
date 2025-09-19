// * Functions
// > Hoisted
// > DECLARATION

function greet(age, name) {
  return `Hello my name is ${name}. I am ${age} years old...`;
}

console.log(greet("28"));

// * Not Hoisted - EXPRESSION
const add = function (a, b) {
  return a + b;
};

console.log(add(2, 6));

// * Calculate Bmi - name, weight, height

const calcBMI = function (name, weight, height) {
  const bmi = weight / height ** 2;
  return `${name}'s body mass index is ${bmi.toFixed(1)}`;
};

console.log(calcBMI("Michel", 80, 1.86));
console.log(calcBMI("Manhal", 83, 1.78));

// * Not Hoisted - ARROW
const subtract = (a, b) => a - b;
const sum = (a, b) => {
  return a - b;
};

console.log(subtract(10, 5));

// * Default parameters
const calculateAge = (birthYear, currentYear = 2025) => {
  const age = currentYear - birthYear;
  console.log(age);
};

calculateAge(1990, 2030);

// * Early returns
const showTemp = (temp = 10) => {
  if (temp < 0) return `Freezing 🥶`;
  if (temp < 20) return `Cool 🆒`;
  if (temp > 20 && temp < 32) return `Warm 🌤️`;
  return `Hot 🔥`;
};

console.log(showTemp(45));

// * Exercise: calculating grade
const calculateGrade = (name, score) => {
  if (score >= 90 && score <= 100) return `${name} got an A with score ${score}`;
  if (score >= 80 && score <= 89) return `${name} got an B with score ${score}`;
  if (score >= 70 && score <= 79) return `${name} got an C with score ${score}`;
  if (score >= 60 && score <= 69) return `${name} got an D with score ${score}`;
  if (score < 60 && score >= 0) return `${name} got an F with score ${score}`;
  return `Invalid score... for ${name}`;
};

console.log(calculateGrade("hasse", -1));
