const bg = document.getElementById('parallax-bg');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  bg.style.transform = `translateY(${scrollY * 0.5}px)`;
});


const projectTitles = document.querySelectorAll('.ProjectItem h3');
const fonts = ['Habibi', 'Courier Prime', 'Roboto Mono']; // De drie fonts
const fps = 5; // Frames per seconde
const intervalTime = 1000 / fps; // Interval in milliseconden

projectTitles.forEach(title => {
    let interval;
    let fontIndex = 0;

    title.addEventListener('mouseenter', () => {
        interval = setInterval(() => {
            fontIndex = (fontIndex + 1) % fonts.length; // Wissel tussen de fonts
            title.style.fontFamily = fonts[fontIndex];
        }, intervalTime);
    });

    title.addEventListener('mouseleave', () => {
        clearInterval(interval); // Stop het wisselen bij het verlaten van de hover
        title.style.fontFamily = fonts[0]; // Reset naar het standaardfont
    });
});