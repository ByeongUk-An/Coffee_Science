const navWrap = document.querySelector(".nav_wrap");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo_img");
const close = document.querySelector(".close");
const searchCon = document.querySelector(".search_content");
const search = document.querySelector(".search");
const mb = document.querySelector(".mb");
const searchinput = document.querySelector(".search_input");

// document.addEventListener("scroll", function () {
//   let currentScrollValue = document.documentElement.scrollTop;
//   if (currentScrollValue > 100) {
//     if (window.innerWidth >= 993) {
//       navWrap.classList.add("show");
//       nav.classList.add("show");
//       logo.src = "./asets/images/logo-after.png";
//     }
//   } else {
//     navWrap.classList.remove("show");
//     nav.classList.remove("show");
//     logo.src = "./asets/images/logo-before.png";
//   }
// });
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
  searchinput.value = null;
});
mb.addEventListener("click", function () {
  searchCon.classList.toggle("show");
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Hambuger
const burger = $(".menu-trigger");
const navclass = $(".nav");
const logoWrap = $(".logo_wrap");

burger.each(function (index) {
  const $this = $(this);

  $this.on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active-2");
    navclass.toggleClass("show");
    logoWrap.toggleClass("show");
  });
});
