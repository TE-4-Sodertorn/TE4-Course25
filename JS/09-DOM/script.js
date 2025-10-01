"use strict";

const myObj = {
  name: "Francisco Sabino",
  role: "Fullstack developer",
  city: "Stockholm",
  country: "Sweden",
  skillS: ["React", "Nodejs", "Sass", "Tailwindcss"],
  age: 35,
};
// * Elements
const headingRole = document.getElementById("role");
const heading1 = document.querySelector("h1");
const aboutText = document.getElementById("about-text");
const skillsList = document.getElementById("skills");

const welcomeMessage = `Hello my name is ${myObj.name}`;
const welcomeRole = `I'm a ${myObj.role} from ${myObj.city}, ${myObj.country}`;

heading1.textContent = welcomeMessage;
headingRole.textContent = welcomeRole;
aboutText.textContent = ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quia eum dolores ${myObj.name} dolore quos consectetur aliquam consequatur ${myObj.city} autem illum earum!`;

for (const item of myObj.skillS) {
  const li = document.createElement("li");
  li.textContent = item;
  skillsList.appendChild(li);
}
