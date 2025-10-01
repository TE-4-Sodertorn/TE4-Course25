console.log("Hello, World!");

const sum = (...numArray) => {
  let total = 0;

  console.log(numArray);

  for (const number of numArray) {
    total += number;
  }

  return total;
};
console.log(sum(2, 4, 7, 8, 20, 5578));

const names = ["Lana", "Marc", "Antony", "Phillip"];
const newNames = [...names, "Frank", "Manhal", "Erik"];

console.log("names", names);
console.log("new names", newNames);

const car = {
  model: "Volvo V60 Polestar",
};

const carClone = { ...car, horsepower: 360 };
console.log(car);
console.log(carClone);
