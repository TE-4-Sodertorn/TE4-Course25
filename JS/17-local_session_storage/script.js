console.log("Hello World!");

const username = "Frank";
localStorage.setItem("name", username);

const clearButton = document.createElement("button");
const themeToggle = document.createElement("button");
const para = document.createElement("p");
document.body.appendChild(clearButton);
document.body.appendChild(para);
document.body.appendChild(themeToggle);

themeToggle.innerText = "Toggle Dark/Light Theme";
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

clearButton.innerText = "Clear localStorage";
clearButton.addEventListener("click", () => {
  localStorage.clear();
  para.textContent = "";
  input.value = "";
});

para.textContent = localStorage.getItem("name");

// form auto-save
const input = document.createElement("input");
document.body.appendChild(input);
input.type = "text";
input.placeholder = "Type something to auto-save";

input.value = localStorage.getItem("autosave") || "";

input.addEventListener("input", () => {
  localStorage.setItem("autosave", input.value);
});

// apply the auto-saved value on page load
window.addEventListener("load", () => {
  const savedValue = localStorage.getItem("autosave");
  if (savedValue) {
    input.value = savedValue;
  }
});
