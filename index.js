//Dark Mode Toggle

const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");

const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Dark Mode that changes according to device preference

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  body.classList.add("dark");
}
if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  body.classList.remove("dark");
}

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});