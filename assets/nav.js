const nav = document.getElementById("floating-nav");
const menuBtn = document.querySelector("#floating-nav .menu-btn");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll('#floating-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');

    if (targetId === "#hero-section") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(targetId);

    const yOffset = -window.innerHeight / 4;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  });
});