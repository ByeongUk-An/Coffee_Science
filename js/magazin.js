const navWrap = document.querySelector(".nav_wrap");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo_img");
const close = document.querySelector(".close");
const searchCon = document.querySelector(".search_content");
const search = document.querySelector(".search");
const mb = document.querySelector(".mb");
const searchinput = document.querySelector(".search_input");
const sns = document.querySelector(".sns");
const sidebar = document.querySelector(".sidebar-wrap");

let innerWidth = window.innerWidth;

if (innerWidth <= "992") {
  logo.src = "./asets/images/logo-after.png";
}

window.onresize = function (event) {
  const innerWidth = window.innerWidth;
  //   innerWidth <= "992"
  //     ? (logo.src = "./asets/images/logo-before.png")
  //     : (logo.src = "./asets/images/logo-after.png");
};

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

// sidebar
let sideHeight = window.scrollY;
const fix = document.querySelector(".sidebar-wrap");

// GSAP
const headTl = gsap.timeline({
  defaults: {},
});
headTl
  .from("header .logo_img", {
    opacity: 0,
    delay: 0.5,
  })
  .from("header .nav", {
    yPercent: 40,
    duration: 0.5,
    stagger: 0.1,
    opacity: 0,
  });
