const navWrap = document.querySelector(".nav_wrap");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo_img");
const close = document.querySelector(".close");
const searchCon = document.querySelector(".search_content");
const search = document.querySelector(".search");
const mb = document.querySelector(".mb");
const searchinput = document.querySelector(".search_input");
const sns = document.querySelector(".sns");
// let size = window.innerWidth;
const burger = $(".menu-trigger");
const burgershow = $(".menu-trigger.active2");
const navclass = $(".nav");
const logoWrap = $(".logo_wrap");
const navWrap1 = $(".nav_wrap");
let HeightValue = document.documentElement.scrollTop;

document.addEventListener("scroll", function () {
  let currentScrollValue = document.documentElement.scrollTop;
  if (currentScrollValue > 100) {
    navWrap.classList.add("show");
    nav.classList.add("show");
    logo.src = "./asets/images/logo-after.png";
    if (window.innerWidth >= 992) {
    }

    if (window.innerWidth <= 992) {
      if (burger.hasClass("active-2") === false) {
        nav.classList.remove("show");
      }
    }
  } else if (currentScrollValue <= 0) {
    if (window.innerWidth >= 992) {
      navWrap.classList.remove("show");
      nav.classList.remove("show");
      logo.src = "./asets/images/logo-before.png";
    }
    if (window.innerWidth <= 992) {
      navWrap.classList.remove("show");
      logo.src = "./asets/images/logo-before.png";

      if (burger.hasClass("active-2") === true) {
        logo.src = "./asets/images/logo-after.png";
      }
    }
  }
});

if (window.innerWidth <= 992) {
  if (burger.hasClass("active-2") === false) {
    nav.classList.remove("show");
    if (HeightValue < 100) {
    }
  }
  if (burger.hasClass("active-2") === true) {
    logo.src = "./asets/images/logo-after.png";
  }
}

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

burger.each(function (index) {
  const $this = $(this);

  $this.on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active-2");
    navclass.toggleClass("show");
    logoWrap.toggleClass("show");

    if (burger.hasClass("active-2") === true) {
      logo.src = "./asets/images/logo-after.png";
    } else if (burger.hasClass("active-2") === false) {
      logo.src = "./asets/images/logo-before.png";
    }
    if (HeightValue > 100) {
      if (navWrap1.hasClass("show") === true) {
        logo.src = "./asets/images/logo-after.png";
      }
      if (navWrap1.hasClass("show") === false) {
        logo.src = "./asets/images/logo-before.png";
      }
    } else if (HeightValue < 100) {
      if (navWrap1.hasClass("show") === true) {
        logo.src = "./asets/images/logo-after.png";
      }
    }
  });
});
