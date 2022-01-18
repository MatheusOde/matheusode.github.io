const home = document.getElementById('home-btn');
home.addEventListener('click', () => {
        document.getElementById("intro").scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' });
});
    
const projects = document.getElementById('projects-btn');
projects.addEventListener('click', () => {
        document.getElementById('proj').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' });
});

const skills = document.getElementById('skills-btn');
skills.addEventListener('click', () => {
        document.getElementById("skill").scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' }); 
    
});
