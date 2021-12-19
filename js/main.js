const mobileBtn = document.querySelector('#mobile-cta');
const menuLinks = document.querySelector("nav");

const mobileMenu = () => {
    mobileBtn.classList.toggle('active');
    menuLinks.classList.toggle('show');
}

mobileBtn.addEventListener('click', mobileMenu);