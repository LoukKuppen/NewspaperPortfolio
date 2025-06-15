const bg = document.getElementById('parallax-bg');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  bg.style.transform = `translateY(${scrollY * 0.5}px)`;
});

const projectTitles = document.querySelectorAll('.ProjectItem h3');
const fonts = ['Habibi', 'Courier Prime', 'Roboto Mono'];
const fps = 5;
const intervalTime = 1000 / fps;

projectTitles.forEach(title => {
    let interval;
    let fontIndex = 0;

    title.addEventListener('mouseenter', () => {
        interval = setInterval(() => {
            fontIndex = (fontIndex + 1) % fonts.length;
            title.style.fontFamily = fonts[fontIndex];
        }, intervalTime);
    });

    title.addEventListener('mouseleave', () => {
        clearInterval(interval);
        title.style.fontFamily = fonts[0];
    });
});


