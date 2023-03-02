import { preloadImages, preloadFonts } from "./utils";
import LocomotiveScroll from "locomotive-scroll";

const topBackEl = document.querySelector(".img__bottom");
const backtopEl = document.querySelector(".backtop");

const workEl = document.querySelector("#linkw");
const projectEl = document.querySelector("#finish");

const linkmeEl = document.querySelector("#linkme");
const aboutEl = document.querySelector("#aboutme");

const headerEl = document.querySelector("#header");
const footerEl = document.querySelector(".footer__links__to");

// Preload  images and fonts
Promise.all([preloadImages(".tiles__line-img"), preloadFonts("rmd7deq")]).then(
  () => {
    // Remove loader (loading class)
    document.body.classList.remove("loading");

    // Initialize the Locomotive scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    topBackEl.addEventListener("click", () => scroll.scrollTo(footerEl));

    backtopEl.addEventListener("click", () => scroll.scrollTo(headerEl));

    workEl.addEventListener("click", () => scroll.scrollTo(projectEl));

    linkmeEl.addEventListener("click", () => scroll.scrollTo(aboutEl));
  }
);
