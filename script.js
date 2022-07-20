const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon-btn');

const mobileMenu = document.getElementById('mobile-menu');
const mobileList = document.getElementById('mobile-menu-list');

const modals = document.querySelectorAll('.popup');
const projectButtons = document.querySelectorAll('.project-button');
const closeBtn = document.querySelectorAll('.close-btn');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

mobileList.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

for (let i = 0; i < projectButtons.length; i += 1) {
  projectButtons[i].addEventListener('click', () => {
    const modal = document.querySelector(projectButtons[i].getAttribute('data-target'));
    modal.style.display = 'block';
  });
}

for (let i = 0; i < closeBtn.length; i += 1) {
  closeBtn[i].addEventListener('click', () => {
    for (let j = 0; j < modals.length; j += 1) {
      if (modals[j].style.display === 'block') {
        modals[j].style.display = 'none';
      }
    }
  });
}
