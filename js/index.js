//typing text animation script
var typed = new Typed(".typing_text", {
  strings: [
    "Web Designer.",
    "Web Developer.",
    "WordPress Expert.",
    "Freelancer.",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  cursorChar: "|️",
});
var cursorOutline = document.querySelector(".cursor-outline");
var cursorPoint = document.querySelector(".cursor-point");
document.addEventListener("mousemove", (e) => {
  cursorOutline.style.cssText = cursorPoint.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// animation and gsap

function init() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
}

init();

gsap.from(".socials", {
  x: -70,
  delay: 0.6,
  duration: 1,
  opacity: 0,
});

let tl = gsap.timeline();

tl.from(".logo", {
  y: -60,
  delay: 0.2,
  duration: 0.5,
  opacity: 0,
  stagger: 0.6,
});
