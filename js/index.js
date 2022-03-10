const navWrap = document.querySelector(".nav_wrap");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo_img");
const close = document.querySelector(".close");
const searchCon = document.querySelector(".search_content");
const search = document.querySelector(".search");
document.addEventListener("scroll", function () {
  let currentScrollValue = document.documentElement.scrollTop;
  if (currentScrollValue > 100) {
    navWrap.classList.add("show");
    nav.classList.add("show");
    logo.src = "./asets/images/logo-after.png";
  } else {
    navWrap.classList.remove("show");
    nav.classList.remove("show");
    logo.src = "./asets/images/logo-before.png";
  }
});
search.addEventListener("click", function () {
  searchCon.classList.toggle("show");
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
close.addEventListener("click", function () {
  searchCon.classList.toggle("show");
});
