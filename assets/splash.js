window.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const main = document.getElementById("main-content");

  if (!splash || !main) {
    console.log("Missing elements!");
    return;
  }

  setTimeout(() => {
    splash.classList.add("fade-out");

    setTimeout(() => {
      splash.style.display = "none";
      main.classList.remove("hidden");
      main.classList.add("show");
      document.body.classList.remove("no-scroll");
    }, 800);
  }, 3000);
});