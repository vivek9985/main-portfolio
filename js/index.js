 //typing text animation script
var typed = new Typed(".typing_text", {
    strings: ["Web Designer.", "Web Developer.", "WordPress Expert.", "Freelancer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    cursorChar: '|️',
    });  
var cursorOutline = document.querySelector(".cursor-outline");
var cursorPoint = document.querySelector(".cursor-point");
document.addEventListener("mousemove", (e) => {
    cursorOutline.style.cssText = cursorPoint.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});    