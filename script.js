const burgerBtn = document.querySelector(".burger__btn");
const headerNav = document.querySelector(".header__nav");
const secondburgerBtn = document.querySelector(".nav__burger__btn")
burgerBtn.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  burgerBtn.classList.toggle("open");
});

secondburgerBtn.addEventListener("click", () => {
  headerNav.classList.toggle("open");
});
