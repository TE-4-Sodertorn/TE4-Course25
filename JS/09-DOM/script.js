console.log("Hello, World!");
const main = document.querySelector("main");
main.style.height = "100vh";
const h1 = document.getElementById("heading");
h1.innerText = "Welcome to our JS DOM basics class! 🔥";
console.log(h1.innerText);

const paragraph = document.querySelector("p");
console.log(paragraph);

const list = document.querySelector("ul");

const newListItem = document.createElement("li");
newListItem.textContent = "6";
newListItem.classList.add("list-item");
list.appendChild(newListItem);

const listItems = document.querySelectorAll(".list-item");

for (const item of listItems) {
  item.style.color = "purple";
  item.style.listStyle = "none";
  item.style.fontSize = "2rem";
}
newListItem.remove();

console.log(listItems.length);

const button = document.createElement("button");
const body = document.querySelector("body");
body.appendChild(button);

button.innerText = "Click ME FFS";
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px";

button.addEventListener("click", () => {
  console.log("CLick");
  button.style.width = "300px";
  button.style.backgroundColor = "yellow";
});

const box = document.createElement("div");
box.style.width = "300px";
box.style.height = "300px";
box.style.backgroundColor = "red";
box.style.transition = "all 200ms ease";

body.appendChild(box);

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "lightblue";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "lightgreen";
});

const log = document.getElementById("log");
const message = document.getElementById("message");
const input = document.getElementById("input");

input.addEventListener("keydown", (event) => {
  log.textContent = `Key pressed: ${event.key}`;
  if (event.key === "ö" || event.key === "å" || event.key === "ä")
    window.alert("Forbidden key!!! ");
});

input.addEventListener("keyup", (event) => {
  log.textContent = `KEY released: ${event.key}`;
});

input.addEventListener("input", () => {
  message.textContent = input.value;
});

const form = document.getElementById("myForm");
const stat = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  stat.textContent = `Form submitted`;

  setTimeout(() => {
    stat.textContent = "";
  }, 2000);
});

window.addEventListener("scroll", () => {
  console.log(`You scrolled to ${window.scrollY}px`);
});
window.addEventListener("resize", () => {
  console.log(`window size ${window.innerWidth}px`);
});
