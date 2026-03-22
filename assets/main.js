const btn_github = document.querySelector("#github-btn");
const btn_projects = document.querySelector("#work-btn");
const btn_email = document.querySelector("#email-btn");

const nexa_project_btn = document.querySelector("#git-nexa-btn");
const leo_project_btn = document.querySelector("#git-leo-btn");
const nyrox_project_btn = document.querySelector("#git-nyrox-btn");
const vise_project_btn = document.querySelector("#git-vise-btn");

const btn_check_git = document.querySelectorAll("#git-btn");
const linkedin_btn = document.querySelector("#linkedin-btn");

btn_github.addEventListener("click", () => {
    window.open("https://github.com/WitherXee69", "_blank");
});

btn_projects.addEventListener("click", () => {
    const projectsSection = document.querySelector("#projects");

    const yOffset = -80; // adjust this (navbar height etc.)
    const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
});

btn_email.addEventListener("click", () => {
    window.open("mailto:witherxee@gmail.com");
});

btn_check_git.forEach(btn => {
    btn.addEventListener("click", () => {
        window.open("https://github.com/WitherXee69", "_blank");
    });
});

linkedin_btn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/thisitha-sidartha-6218a4214/", "_blank");
});

nexa_project_btn.addEventListener("click", () => {
    window.open("https://github.com/WitherXee69/NEXA_Shell", "_blank");
});

leo_project_btn.addEventListener("click", () => {
    window.open("https://github.com/WitherXee69/Project_LEO", "_blank");
});

nyrox_project_btn.addEventListener("click", () => {
    window.open("https://github.com/WitherXee69/Project_Nyrox", "_blank");
});

vise_project_btn.addEventListener("click", () => {
    window.open("https://github.com/WitherXee69/Project_VISE", "_blank");
});

const bgVideo = document.getElementById("background-video");

document.addEventListener("touchstart", () => {
  if (bgVideo.paused) bgVideo.play();
}, { once: true });

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});