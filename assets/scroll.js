const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();

    if (rect.top < windowHeight - 100 && rect.bottom > 0) {
      el.classList.add("active");   // 👈 fade IN
    } else {
      el.classList.remove("active"); // 👈 fade OUT
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();