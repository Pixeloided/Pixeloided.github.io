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
