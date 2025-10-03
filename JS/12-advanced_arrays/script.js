console.log("Hello, World!");

const favoriteMovies = ["Titanic", "Lord of the rings", "Chappie", "The Green Book", "Star wars"];
console.log(favoriteMovies[1]);

favoriteMovies.push("Zorro");
console.log(favoriteMovies);

favoriteMovies.shift();
console.log(favoriteMovies);

const numbersArray = [1, 2, 3, 4, 5];
const squaredNumbers = numbersArray.map((number) => number ** 2);
console.log(squaredNumbers);

const odd = squaredNumbers.filter((n) => n % 2 === 0);
console.log(odd);

const doubleArray = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

doubleArray[1][1] = "x";
console.log(doubleArray);

const totals = [10, 20, 30, 40, 50];
const totalPayable = totals.reduce((curr, acc) => curr + acc, 0);
console.log(totalPayable);
