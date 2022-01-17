const home = document.getElementById('home-btn');
home.addEventListener('click', () => {
    document.getElementById("introduction").scrollIntoView();
});
    
const projects = document.getElementById('projects-btn');
projects.addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView();
});

const skills = document.getElementById('skills-btn');
skills.addEventListener('click', () => {
    document.getElementById("skills").scrollIntoView();
});

const contact = document.getElementById('contact-btn');