let scrollY;

document.addEventListener("DOMContentLoaded", function () {
  scrollY = window.scrollY + 1;

  const parallax = document.querySelectorAll(".parallax");
  parallax.forEach((item, index) => {
    item.style.transform = `translateY(${scrollY * item.dataset.speed}px)`;
  });
});

document.addEventListener("scroll", function () {
  const parallax = document.querySelectorAll(".parallax");
  scrollY = window.scrollY + 1;

  if (scrollY > 120) {
    const arrow = document.querySelector(".scroll-arrow");
    arrow.style.opacity = 0;
    arrow.style.scale = 0.75;
  }

  parallax.forEach((item, index) => {
    item.style.transform = `translateY(${scrollY * item.dataset.speed}px)`;
  });
});

document.addEventListener("mousemove", function (e) {
  const moveElement = document.querySelectorAll(".mmove");
  moveElement.forEach((elem, index) => {
    const moveRateX = elem.getAttribute("data-rate-x") || 0.05;
    const moveRateY = elem.getAttribute("data-rate-y") || 0.05;
    const x = (window.innerWidth / 2 - e.pageX) * moveRateX;
    const y = (window.innerHeight / 2 - e.pageY) * moveRateY;
    elem.style.transform = `translate(${x}px, ${y}px)`;
  });
});
