console.log("Hello, World!");
// // form
// const form = document.querySelector("form");

// // result: Element to show the result
// const result = document.querySelector("#result");
// // error: Element to show the error
// const error = document.querySelector("#error");
// const final = document.querySelector("#final");

// const divide = (a, b) => {
//   if (b === 0) {
//     error.textContent = "Number cannot be divided by 0";
//     throw new Error("Number cannot be divided by 0");
//   }
//   const res = a / b;
//   result.textContent = res;
// };

// form.addEventListener("submit", (e) => {
//   try {
//     e.preventDefault();
//     const a = +e.target.value_a.value;
//     const b = +e.target.value_b.value;
//     console.log(typeof a, typeof b);
//     divide(a, b);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     final.textContent = "Operation finisheds";
//   }
// });

// Exercise!
const multiply = (a, b) => {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Cannot multiple anything other than numbers");
    }
    console.log(a * b);
  } catch (error) {
    console.error(error.message);
  }
};

multiply(24, 28);
multiply("24", 28);

const getUserAge = (obj) => {
  try {
    if (!obj.age) {
      throw new Error("Age not provided!");
    }
    console.log(`The user age is ${obj.age}`);
    return obj.age;
  } catch (error) {
    console.error(error.message);
  } finally {
    console.warn("Done checking user!");
  }
};

const users = [
  { name: "Frank", age: 35 },
  { name: "Erkan", age: 18 },
  { name: "Mohamed", age: 19 },
];

getUserAge(users[1]);

const getBirthYear = (age) => {
  try {
    if (typeof age !== "number") throw new Error("Age not valid or empty");
    const birthYear = new Date().getFullYear() - age;
    console.log(birthYear);
  } catch (error) {
    console.log(error.message);
  }
};

getBirthYear(getUserAge(users[1]));
