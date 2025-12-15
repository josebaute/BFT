// Seleccionamos elementos
const progressBar = document.getElementById('progress-bar');
const section = document.querySelector('.how-we-work');
const stages = document.querySelectorAll('.stage');

window.addEventListener('scroll', () => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPos = window.scrollY + window.innerHeight/2; // centro del viewport

    let progress = ((scrollPos - sectionTop) / sectionHeight) * 100;

    if(progress < 0) progress = 0;
    if(progress > 100) progress = 100;

    progressBar.style.width = progress + '%';

    stages.forEach((stage, index) => {
        const stepPercent = (index / (stages.length - 1)) * 100;
        if(progress >= stepPercent) {
            stage.classList.add('active');
        } else {
            stage.classList.remove('active');
        }
    });
});




