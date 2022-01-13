const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
    nav.classList.toggle("menu-btn");
});
mobileBtnExit.addEventListener("click", () => {
    nav.classList.toggle("menu-btn");
});

let scrollTop = 0;
const firstIntro = document.querySelector('.first-introduction');
const personalInfo = document.querySelector('.little-story');
const project = document.querySelector('.projects');

personalInfo.style.opacity = 0;
project.style.opacity = 0;

window.addEventListener('scroll', (e) => {
    scrollTop = window.pageYOffset;
    firstIntroHeight = firstIntro.offsetHeight;
    personalInfoHeight = personalInfo.offsetHeight;
    projectHeight = project.offsetHeight;
    firstIntro.style.opacity = 1 - (scrollTop * 1.1) / firstIntroHeight * 0.4;
    personalInfo.style.opacity = 0 + scrollTop * 1.1 / personalInfoHeight * 0.4;
    var w = document.documentElement.clientWidth || window.innerWidth;
    if (personalInfoHeight < scrollTop) {
        personalInfo.style.opacity = 1 - (scrollTop - firstIntroHeight * 3) / personalInfoHeight * 0.4;
        if (w <= 665) {
            personalInfo.style.opacity = 1.1 - (scrollTop - firstIntroHeight * 3) / personalInfoHeight * 0.4;
        }
    }
    project.style.opacity = 0 + scrollTop * 1.1 / projectHeight * 0.4;
    if (projectHeight < scrollTop) {
        project.style.opacity = 1 - ((scrollTop * 0.2) - personalInfoHeight * 3) / projectHeight;
    }
    if (w <= 665) {
        project.style.opacity = ((scrollTop * 2 - personalInfoHeight * 1.1) / projectHeight) - 0.4;
        if (projectHeight < scrollTop) {
            project.style.opacity = 1 - ((scrollTop) - projectHeight) / projectHeight * 0.5;
        }
    }
});

const home = document.getElementById('home');
const about = document.getElementById('about');
const projects = document.getElementById('project');
const contact = document.getElementById('contact');
home.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
    });
    nav.classList.remove("menu-btn");
});
about.addEventListener('click', () => {
    setTimeout(function() {
        window.scrollTo({
            top: 500,
        });
    }, 2);
    nav.classList.toggle("menu-btn");
});
projects.addEventListener('click', () => {
    setTimeout(function() {
        window.scrollTo({
            top: 1200,
        });
    }, 2);
    nav.classList.toggle("menu-btn");
});
contact.addEventListener('click', () => {
    setTimeout(function() {
        window.scrollTo({
            top: 2000,
        });
    }, 2);
    nav.classList.toggle("menu-btn");
});


const home2 = document.getElementById('home2');
const about2 = document.getElementById('about2');
const projects2 = document.getElementById('project2');
const contact2 = document.getElementById('contact2');
home2.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
    });
    nav.classList.toggle("menu-btn");
});
about2.addEventListener('click', () => {
    setTimeout(function() {
        window.scrollTo({
            top: 500,
        });
    }, 2);
    nav.classList.toggle("menu-btn");
});
projects2.addEventListener('click', () => {
    setTimeout(function() {
        window.scrollTo({
            top: 1200,
        });
    }, 2);
    nav.classList.toggle("menu-btn");
});
contact2.addEventListener('click', () => {
    setTimeout(function() {
        window.scrollTo({
            top: 2000,
        });
    }, 2);
    nav.classList.toggle("menu-btn");
});