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
  })
  .from(".sc_video .erf", {
    yPercent: 40,
    duration: 2.7,
    stagger: 0.1,
    opacity: 0,
  });

const headTxt = new SplitType(".section_content h2", { types: "words, chars" });
// headTxt.chars
gsap.from(headTxt.chars, {
  // scrollTrigger: {
  //   trigger: ".wrapper",
  //   start: "top top", //트리거 기준잡은 엘리먼트 //윈도우기준
  //   end: "bottom bottom",

  // },
  yPercent: 20,
  duration: 0.5,
  opacity: 0,
  stagger: 0.04,
  delay: 1,
});

gsap.from(".sc_uber .title", {
  scrollTrigger: {
    trigger: ".sc_uber",
    start: "-800",
    end: "top top",
  },
  yPercent: 20,
  duration: 0.5,
  opacity: 0,
  stagger: 0.04,
  delay: 1,
});

$(".mehr_wrap").each(function (index, item) {
  const triggerEl = $(this).find("li");
  gsap.from(triggerEl, {
    scrollTrigger: {
      trigger: ".mehr_wrap",
      start: "-800",
      end: "top top",
    },
    yPercent: 40,
    duration: 1,
    stagger: 0.1,
    opacity: 0,
  });
});

gsap.from(".sc_uns .uns_text", {
  scrollTrigger: {
    trigger: ".sc_uns",
    start: "-1400",
    end: "top top",
  },
  duration: 0.5,
  opacity: 0,
  stagger: 0.04,
  delay: 2,
});

gsap.from(".sc_uns .gs-li1", {
  scrollTrigger: {
    trigger: ".sc_uns",
    start: "-1100",
    end: "top top",
  },
  xPercent: -30,
  duration: 0.5,
  opacity: 0,
  stagger: 0.04,
  delay: 1.8,
});

gsap.from(".sc_uns .gs-li2", {
  scrollTrigger: {
    trigger: ".sc_uns",
    start: "-1100",
    end: "top top",
  },
  // yPercent: 50,
  duration: 4,
  opacity: 0,
  stagger: 0.04,
  delay: 1.5,
});
gsap.from(".sc_uns .gs-li3", {
  scrollTrigger: {
    trigger: ".sc_uns",
    start: "-1100",
    end: "top top",
  },
  xPercent: 30,
  duration: 0.5,
  opacity: 0,
  stagger: 0.04,
  delay: 1.8,
});
