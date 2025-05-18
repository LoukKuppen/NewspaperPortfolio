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

const animatedImage = document.getElementById('animatedImage');
const lastImage = 'LogoAnimatiePortfolio4.png';
const iconWrapper = animatedImage.parentElement;

function updateAnimationOnScroll() {
    const images = [
        'paperball.png',
        'paperball2.png',
        'paperball3.png',
        lastImage
    ];
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const startFraction = 0.9;
    let scrollFraction = (scrollTop / docHeight - startFraction) / (1 - startFraction);
    scrollFraction = Math.max(0, Math.min(scrollFraction, 1));
    const frame = Math.min(
        images.length - 1,
        Math.floor(scrollFraction * images.length)
    );
    animatedImage.src = images[frame];

    // Voeg class toe als het de laatste afbeelding is, anders verwijder hem
    if (images[frame] === lastImage) {
        animatedImage.classList.add('dynamic-hover');
    } else {
        animatedImage.classList.remove('dynamic-hover');
        animatedImage.style.transform = '';
        iconWrapper.classList.remove('show-icons'); // Verberg iconen als je niet op het laatste plaatje bent
    }
}
window.addEventListener('scroll', updateAnimationOnScroll);
window.addEventListener('DOMContentLoaded', updateAnimationOnScroll);

// Dynamische rotatie bij mousemove
animatedImage.addEventListener('mousemove', function(e) {
    if (!animatedImage.classList.contains('dynamic-hover')) return;
    const rect = animatedImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const centerX = rect.width / 2;
    // Max 8 graden rotatie
    const rotate = ((x - centerX) / centerX) * 8;
    animatedImage.style.transform = `scale(1.08) rotate(${rotate}deg)`;
});
animatedImage.addEventListener('mouseleave', function() {
    if (animatedImage.classList.contains('dynamic-hover')) {
        animatedImage.style.transform = 'scale(1.08)';
    }
});

// Toon iconen bij klik op laatste afbeelding
animatedImage.addEventListener('click', function() {
    if (!animatedImage.classList.contains('dynamic-hover')) return;
    iconWrapper.classList.toggle('show-icons');
});