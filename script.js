const bg = document.getElementById('parallax-bg');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  bg.style.transform = `translateY(${scrollY * 0.5}px)`;
});