const openMenu = document.querySelector(".header__open");
const menu = document.querySelector(".header__menu");

openMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  openMenu.classList.toggle("active");
});
