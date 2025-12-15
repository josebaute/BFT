const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  if(navbar.classList.contains("active")){
    gsap.to(navbar, { x: 200, duration: 0.3, ease: "power2.in", onComplete: () => navbar.classList.remove("active") });
  } else {
    navbar.classList.add("active");
    gsap.fromTo(navbar, { x: 200 }, { x: 0, duration: 0.3, ease: "power2.out" });
  }
});
