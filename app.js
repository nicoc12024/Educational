const burger = document.querySelector(".burger");
const ulNav = document.querySelector(".menu-mobile");
const aNav = document.querySelectorAll("#nav-bar .menu-mobile .ul-nav a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  ulNav.classList.toggle("active");
});

aNav.forEach((item) => {
  item.addEventListener("click", () => {
    burger.classList.toggle("active");
    ulNav.classList.toggle("active");
  });
});
