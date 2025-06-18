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

  // Stel het aantal afbeeldingen in
  const totalBG = 18; // Pas dit aan naar het aantal BG-afbeeldingen dat je hebt
  let currentBG = 1;

  const bgImage = document.getElementById('bgImage');
  const prevBtn = document.getElementById('prevBG');
  const nextBtn = document.getElementById('nextBG');

  function updateBG() {
    bgImage.src = `Images/ContentStrategie/CS${currentBG}.png`;
    bgImage.alt = `ContentStrategie ${currentBG}`;
  }

  prevBtn.addEventListener('click', function() {
    if (currentBG > 1) {
      currentBG--;
      updateBG();
    }
  });

  nextBtn.addEventListener('click', function() {
    if (currentBG < totalBG) {
      currentBG++;
      updateBG();
    }
  });
