const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");
mobileBtn.addEventListener("click", () => {
    nav.classList.toggle("menu-btn");
});
mobileBtnExit.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
});

let scrollTop = 0;
const firstIntro = document.querySelector('.first-introduction');
const personalInfo = document.querySelector('.little-story');

window.addEventListener('scroll', (e) => {
    scrollTop = window.pageYOffset;
    firstIntroHeight = firstIntro.offsetHeight;
    personalInfoHeight = personalInfo.offsetHeight;
    firstIntro.style.opacity = 1 - (scrollTop * 1.1) / firstIntroHeight * 0.4;
    personalInfo.style.opacity = 1 - (scrollTop - firstIntroHeight * 3) / personalInfoHeight * 0.4;
});