const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon-btn');

const mobileMenu = document.getElementById('mobile-menu');
const mobileList = document.getElementById('mobile-menu-list');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

mobileList.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
