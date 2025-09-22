console.log("Hello, World!");
const key = "fuel";

const car = {
  maker: "Volvo",
  model: "V60",
  horsepower: 360,
  fuel: "Diesel",
  "model year": 2018,
};

car.color = "Blue";
car.fuel = "Gasoline";
delete car["model year"];

console.log(car);

const person = new Object();
person.name = "Michel Da Silva";
person.age = 20;
person.profession = "Student";

console.log(person.age);

const array = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11, [12, 13, 14]]];
console.log(array[8][3][1]);

const school = {
  name: "NTI",
  address: {
    street: "Rontevagen 19",
    municipality: "Huddinge",
    city: "Stockholm",
    postalCode: 14152,
  },
  classes: [
    {
      name: "TE4_25",
      numberOfStudents: 10,
    },
    {
      name: "TE23",
      numberOfStudents: 25,
    },
    {
      name: "EE23",
      numberOfStudents: 39,
    },
    {
      name: "ES23",
      numberOfStudents: 16,
    },
  ],
};

console.log(school);

for (const item in school) {
  console.log(item, school[item]);
}

for (const item of school.classes) {
  console.log(item);
}

// ! Exercise
// A-1
const book = {
  title: "Harry potter",
  author: "J.K Rowling",
  year: 2006,
};

book.pages = 496;

for (const key in book) {
  console.log(key, book[key]);
}

//B
const user = {
  name: "Borat Margaret Sagdiyev",
  country: "Kazakhstan",
};

console.log(`Hello, my name is ${user.name}, I am from ${user.country}`);

const books = [
  { title: "Harry potter", author: "J.K Rowling", year: 2006 },
  { title: "Lord of the Rings", author: "J.K Rowling", year: 2006 },
  { title: "Star wars", author: "J.K Rowling", year: 2006 },
];

console.log(books[1].title);

// C

const classroom = {
  teacher: {
    name: "Frank",
    subject: "Frontend Developer",
  },
  students: [
    {
      name: "lucas",
      age: 19,
    },
    {
      name: "michell",
      age: 19,
    },
    {
      name: "erik",
      age: 19,
    },
    {
      name: "Sam",
      age: 19,
    },
    {
      name: "Abinash",
      age: 19,
    },
    {
      name: "Tunahan",
      age: 19,
    },
  ],
};

for (const student of classroom.students) {
  console.log(`Hello, my name s ${student.name} I am ${student.age} years old`);
}
