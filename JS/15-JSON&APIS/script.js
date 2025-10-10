"use strict";
console.log("Hello, World!");
// Display data in the DOM
const postsList = document.getElementById("posts");
const errorMessage = document.getElementById("error-message");
errorMessage.style.color = "red";

// async operations
const fetchPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    if (res.status === 404) {
      errorMessage.textContent = `Error fetching data: ${res.status} Not Found! Maybe check the endpoint!`;
      return;
    }
    const data = await res.json();

    data.forEach((item) => {
      const listItem = document.createElement("li");
      const postTitle = document.createElement("h2");
      const postBody = document.createElement("p");
      postTitle.textContent = item.title;
      postTitle.style.fontSize = "1rem";
      postTitle.style.textAlign = "center";
      postBody.textContent = item.body;
      listItem.appendChild(postTitle);
      listItem.appendChild(postBody);
      postsList.style.width = "300px";
      postsList.style.height = "300px";

      postsList.appendChild(listItem);
    });
  } catch (error) {
    errorMessage.textContent = error.message;
    console.log(error);
  }
};
fetchPosts();

// // Parse
// const jsonString = '{"name": "Alice", "age": 25, "school": "NTI Södertörn"}';
// localStorage.setItem("person", jsonString);

// const dataFromLocalStorage = localStorage.getItem("person");
// const parsedLocal = JSON.parse(dataFromLocalStorage);
// console.log(parsedLocal);

// //Stringfy
// const classObj = {
//   name: "TE-4 25",
//   numberOfStudents: 13,
//   students: [
//     {
//       name: "Tunahan",
//       age: 19,
//     },
//     {
//       name: "Sam",
//       age: 19,
//     },
//     {
//       name: "Abi",
//       age: 19,
//     },
//     {
//       name: "Erik",
//       age: 19,
//     },
//     {
//       name: "Albin",
//       age: 19,
//     },
//     {
//       name: "Erkan",
//       age: 19,
//     },
//     {
//       name: "Lucas",
//       age: 19,
//     },
//     {
//       name: "Nirari",
//       age: 19,
//     },
//   ],
// };

// console.log(classObj);
// const jsonClass = JSON.stringify(classObj);
// console.log(jsonClass);
